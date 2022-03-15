import React, { useEffect } from 'react'
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/progress-bar/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import './Download.css'
import { GetUrlReturn, useDownloadGetUrlQuery } from '@iteria-app/s3-graphql-client/src/components/uppy/graphql'
import type { Uppy, UppyFile } from '@uppy/core'

interface FileDownloadProps {
  uppy: Uppy
  listFiles: UppyFile[]
  uploadedFiles: UppyFile[]
  isUploading: boolean
}

function FileDownload({ uppy, listFiles, uploadedFiles, isUploading }: FileDownloadProps) {
  const [fileKey, setFileKey] = React.useState('')

  const [result] = useDownloadGetUrlQuery({
    variables: {
      fileKey: fileKey,
    },
    pause: !fileKey,
  })

  useEffect(() => {
    if (fileKey && result.data) {
      const { downloadGetUrl } = result.data as { downloadGetUrl: GetUrlReturn }
      if (!downloadGetUrl || !downloadGetUrl.url) throw Error(result.error ? result.error.message : 'No download url found')
      const { url } = downloadGetUrl
      const a = document.createElement('a')
      a.href = url
      a.download = fileKey
      a.click()
    }
    if (result?.data || result?.error) setFileKey('')
  }, [result, fileKey])

  return (
    <div className="files">
      {listFiles.map((file) => (
        <div key={file.id} className="file">
          <div className="file-name">{file.name}</div>
          {uploadedFiles.find((f) => f.id + f.size === file.id + file.size) ? (
            <button onClick={() => downloadFile(file)}>download</button>
          ) : (
            <button disabled={isUploading} style={{ opacity: isUploading ? 0 : 1 }} onClick={() => uppy.removeFile(file.id)}>
              ✕
            </button>
          )}
        </div>
      ))}
    </div>
  )

  async function downloadFile(file: UppyFile) {
    try {
      setFileKey(file.name)
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export default FileDownload
