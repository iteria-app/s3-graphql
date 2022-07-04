import type { S3 } from "aws-sdk";
import createBucketIfDoesNotExist from "../helpers/createBucketIfDoesNotExist";

import https from "https";
import AWS from "aws-sdk";
import { ServerContext } from "./types";

export function newS3Client(config: ServerContext) {
  const s3 = new AWS.S3({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
    endpoint: config.endpoint,
    s3ForcePathStyle: true,
    signatureVersion: "v4",
    httpOptions: config.skipSslVerify
      ? {
          agent: new https.Agent({ rejectUnauthorized: false }),
        }
      : {},
  });
  return s3;
}

export const initS3Upload = async (
  config: ServerContext,
  fileKey: string,
  metadata: any
) => {
  const s3 = newS3Client(config);
  try {
    config.precreateBucket &&
      (await createBucketIfDoesNotExist(
        s3,
        config.bucketName as string,
        config.region as string
      ));
    const params: S3.Types.CreateMultipartUploadRequest = {
      Bucket: config.bucketName as string,
      Key: fileKey,
      Metadata: {} || metadata,
    };
    console.log("Uploading into the bucket: ", params.Bucket);
    const { Key, UploadId } = await s3.createMultipartUpload(params).promise();
    return { uploadId: UploadId, key: Key };
  } catch (e) {
    e instanceof Error ? console.log(e.message) : "";
    return { e };
  }
};

export const getUrlsForParts = async (
  config: ServerContext,
  uploadId: string,
  fileKey: string,
  partNumber: number
) => {
  const s3 = newS3Client(config);
  const params = {
    Bucket: config.bucketName,
    Key: fileKey,
    UploadId: uploadId,
    Expires: config.urlExpiration,
    PartNumber: partNumber,
  };
  return await s3.getSignedUrlPromise("uploadPart", params);
};

export const listParts = async (
  config: ServerContext,
  uploadId: string,
  fileKey: string
) => {
  const s3 = newS3Client(config);
  const params = {
    Bucket: config.bucketName as string,
    Key: fileKey,
    UploadId: uploadId,
  };
  const { Parts } = await s3.listParts(params).promise();
  if (Parts)
    return Parts.map((p) => ({
      PartNumber: p.PartNumber,
      Size: p.Size,
      ETag: p.ETag ? JSON.parse(p.ETag) : "",
    }));
  return [{ PartNumber: 1, Size: 1, ETag: "this sucks" }];
};

export const completeMultipartUpload = async (
  config: ServerContext,
  uploadId: string,
  fileKey: string,
  parts: any
) => {
  const s3 = newS3Client(config);
  const params: S3.CompleteMultipartUploadRequest = {
    Bucket: config.bucketName as string,
    Key: fileKey,
    UploadId: uploadId,
    MultipartUpload: { Parts: parts },
  };
  const { Location } = await s3.completeMultipartUpload(params).promise();
  return Location;
};

export const abortMultipartUpload = async (
  config: ServerContext,
  uploadId: string,
  fileKey: string
) => {
  const s3 = newS3Client(config);
  const params = {
    Bucket: config.bucketName as string,
    Key: fileKey,
    UploadId: uploadId,
  };
  await s3.abortMultipartUpload(params).promise();
};
