import React, { useState } from 'react'
import FileDownload from './upload/Download'
import FileUpload, { OnChangeOptions } from './upload/Upload'
import { getUppy } from '@iteria-app/s3-graphql-client/src/components/uppy/uppy'
import { UppyFile } from '@uppy/core'
import { useClient } from 'urql'

function UploadDemo({}) {
  const [isUploading, setUploading] = useState(false)
  const [files, setFiles] = useState<UppyFile[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<UppyFile[]>([])
  const [uppy] = useState(getUppy(useClient(), null))

  const ListAndDownloadFiles = (
    <FileDownload
      uppy={uppy}
      listFiles={files}
      uploadedFiles={uploadedFiles}
      isUploading={isUploading}
    />
  )

  return (
    <div className="UploadDemo">
      <FileUpload
        uppy={uppy}
        onChange={handleUploadStateChange}
        slot={ListAndDownloadFiles}
      />
    </div>
  )

  function handleUploadStateChange({
    isUploading,
    files,
    uploadedFiles,
  }: OnChangeOptions) {
    setUploading(isUploading)
    setFiles(files)
    setUploadedFiles(uploadedFiles)
  }
}

export default UploadDemo
