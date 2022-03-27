import Uppy, { UppyFile } from "@uppy/core";
import AwsS3Multipart, { AwsS3Part } from "@uppy/aws-s3-multipart";
import {
  AbortMultipartUploadDocument,
  AbortMultipartUploadMutationVariables,
  CompleteMultipartUploadDocument,
  CompleteMultipartUploadMutationVariables,
  CompleteMultipartUploadReturn,
  PrepareUploadPartsDocument,
  PrepareUploadPartsQueryVariables,
  GetUrlReturn,
  CreateMultipartUploadDocument,
  CreateMultipartUploadReturn,
  ListPartsDocument,
  ListPartsQueryVariables,
  useDownloadGetUrlQuery,
  useDownloadGetUrlsQuery,
  GetUrlsReturn,
} from "./graphql";
import { createRequest } from "urql";
import type { Client } from "urql";

declare global {
  interface Navigator {
    msSaveOrOpenBlob: (blob: Blob) => void;
  }
  interface Window {
    uploadedParts: { [x: string]: AwsS3Part[] };
    uppy: Uppy;
  }
}

type s3MultipartFile = UppyFile & {
  s3Multipart: {
    key: string;
    uploadId: string;
  };
};

interface MetaData {
  key: string;
  partNumbers: number[];
  uploadId: string;
}
const uploadedParts: { [x: string]: AwsS3Part[] } = {};

function getUploadedParts(uploadId: string) {
  const _uploadedParts = uploadedParts[uploadId] || [];
  uploadedParts[uploadId] = _uploadedParts;
  return _uploadedParts;
}

(window as Window)["uploadedParts"] = uploadedParts;

export function getDownloadUrls(fileKeys: string[]) {
  const [result] = useDownloadGetUrlsQuery({
    variables: {
      fileKeys: fileKeys,
    },
    pause: !fileKeys,
  });
  if (fileKeys && result.data) {
    const { downloadGetUrls } = result.data as {
      downloadGetUrls: GetUrlsReturn;
    };
    if (!downloadGetUrls || !downloadGetUrls.urls)
      throw Error(
        result.error ? result.error.message : "No download url found"
      );
    const { urls } = downloadGetUrls;
    return urls;
  }
}

export function getDownloadUrl(fileKey: string) {
  const [result] = useDownloadGetUrlQuery({
    variables: {
      fileKey: fileKey,
    },
    pause: !fileKey,
  });
  if (fileKey && result.data) {
    const { downloadGetUrl } = result.data as { downloadGetUrl: GetUrlReturn };
    if (!downloadGetUrl || !downloadGetUrl.url)
      throw Error(
        result.error ? result.error.message : "No download url found"
      );
    const { url } = downloadGetUrl;
    return url;
  }
}

export function getUppy(urqlClient: Client, allowedFileTypes: string[] | null) {
  const uppy = new Uppy({
    meta: { type: "avatar" },
    restrictions: {
      allowedFileTypes: allowedFileTypes,
    },
    autoProceed: true,
    debug: true,
  });
  uppy.use(AwsS3Multipart, {
    createMultipartUpload,
    prepareUploadParts,
    listParts,
    completeMultipartUpload,
    abortMultipartUpload,
  });

  uppy.on(
    "s3-multipart:part-uploaded" as any,
    (file: s3MultipartFile, part: AwsS3Part) => {
      const uploadedParts = getUploadedParts(file.s3Multipart.uploadId);
      uploadedParts.push(part);
    }
  );
  (window as Window)["uppy"] = uppy;
  return uppy;

  // Initiate multipart upload
  async function createMultipartUpload({
    name,
  }: UppyFile): Promise<{ key: string; uploadId: string }> {
    const request = createRequest(CreateMultipartUploadDocument, {
      fileKey: name,
    });
    return await new Promise((resolve) => {
      try {
        urqlClient.executeMutation(request)((result) => {
          if (typeof result === "object") {
            const { data } = result[0] as any;
            if (data) {
              const { key, uploadId } =
                data.createMultipartUpload as CreateMultipartUploadReturn;
              resolve({ key, uploadId });
            }
          }
        });
      } catch (error: any) {
        console.log(error.message);
      }
    });
  }
  // Get presigned url for each part
  async function prepareUploadParts(data: UppyFile, metadata: MetaData) {
    const urls: { [key: string]: string } = {};
    try {
      for (const partNumber of metadata.partNumbers) {
        const request = createRequest(PrepareUploadPartsDocument, {
          fileKey: metadata.key,
          uploadId: metadata.uploadId,
          partNumber: partNumber,
        } as PrepareUploadPartsQueryVariables);
        await new Promise((r) => {
          urqlClient.executeQuery(request)((result) => {
            if (typeof result === "object") {
              const { data } = result[0] as any;
              if (data) {
                const { url } = data.prepareUploadParts as GetUrlReturn;
                urls[partNumber] = url;
                r(undefined);
              }
            }
          });
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
    return { presignedUrls: urls };
  }
  async function listParts(
    file: UppyFile,
    { uploadId, key }: { uploadId: string; key: string }
  ): Promise<AwsS3Part[]> {
    const request = createRequest(ListPartsDocument, {
      fileKey: key,
      uploadId,
    } as ListPartsQueryVariables);
    return await new Promise((r) => {
      try {
        urqlClient.executeQuery(request)((result) => {
          if (typeof result === "object") {
            const { data } = result[0] as any;
            if (data) {
              const parts = data.listParts as AwsS3Part[];
              const _parts = parts
                .map((part) => ({
                  ETag: part.ETag,
                  PartNumber: part.PartNumber,
                  Size: part.Size,
                }))
                .filter((part) =>
                  getUploadedParts(uploadId).find(
                    (p) => p.PartNumber === part.PartNumber
                  )
                );
              r(_parts);
            }
          }
        });
      } catch (error: any) {
        console.log(error.message);
      }
    });
  }
  //
  async function completeMultipartUpload(
    file: UppyFile,
    {
      uploadId,
      key,
      parts,
    }: { uploadId: string; key: string; parts: AwsS3Part[] }
  ): Promise<{ location: string }> {
    const request = createRequest(CompleteMultipartUploadDocument, {
      fileKey: key,
      uploadId,
      parts,
    } as CompleteMultipartUploadMutationVariables);
    return await new Promise((r) => {
      try {
        urqlClient.executeMutation(request)((result) => {
          if (typeof result === "object") {
            const { data } = result[0] as any;
            if (data) {
              const { location } =
                data.completeMultipartUpload as CompleteMultipartUploadReturn;
              r({ location });
            }
          }
        });
        delete uploadedParts[uploadId];
      } catch (error: any) {
        console.log(error.message);
      }
    });
  }
  //
  async function abortMultipartUpload(
    file: UppyFile,
    { key, uploadId }: { key: string; uploadId: string }
  ): Promise<void> {
    try {
      const request = createRequest(AbortMultipartUploadDocument, {
        fileKey: key,
        uploadId,
      } as AbortMultipartUploadMutationVariables);
      return await new Promise((r) => {
        urqlClient.executeMutation(request)((result) => {
          if (typeof result === "object") {
            const { data } = result[0] as any;
            if (data) r();
          }
        });
        delete uploadedParts[uploadId];
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
}

export const downloadAs = (url: string, fileName: string) => {
  fetch(url, {
    method: "GET",
  })
    .then(function (resp) {
      return resp.blob();
    })
    .then(function (blob) {
      const newBlob = new Blob([blob]);

      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      const nav = window.navigator as Navigator;
      if (nav && nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement("a");
      //link.dataType = "json";
      link.href = data;
      link.download = fileName;
      link.dispatchEvent(new MouseEvent("click"));
      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data), 60;
      });
    });
};
