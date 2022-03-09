import React, { useEffect, useState } from 'react'
import Uppy, { UppyFile } from '@uppy/core'
import { DragDrop, ProgressBar } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/progress-bar/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import './Upload.css'

export interface OnChangeOptions{
  isUploading: boolean
  isPaused?: boolean
  files:UppyFile[]
  uploadedFiles:UppyFile[]
  errorUploading?:Error
}
interface FileUploadProps {
  uppy: Uppy
  slot: JSX.Element
  onChange?: (options: OnChangeOptions) => any
}

function FileUpload({ slot, uppy, onChange }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [errorUploading, setErrorUploading] = useState<Error>()
  const [uploadedFiles, setUploadedFiles] = useState<UppyFile[]>([])
  const [files, setFiles] = useState<UppyFile[]>([])

  useEffect(() => {
    uppy.on('complete', uploadComplete)
    uppy.on('file-added', filesChanged)
    uppy.on('file-removed', filesChanged)
    uppy.on('upload-error', uploadError)
    uppy.on('upload-success', uploadSuccess)
  }, [uppy])

  useEffect(() => {
    if (typeof onChange === 'function') onChange({ isUploading, isPaused, files, uploadedFiles, errorUploading })
  }, [isUploading, isPaused, files, uploadedFiles, errorUploading])

  return (
    <div className="FileUpload">
      <h1>Portal Upload</h1>
      <div className="drop-area">
        <DragDrop
          uppy={uppy}
          locale={{
            strings: {
              dropHereOr: 'Drop here or %{browse}',
              browse: 'browse',
            },
          }}
        />
      </div>
      {/* Start: List uploaded items here */}
      {slot}
      {/* End: List uploaded items here */}
      <div className="progress" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <ProgressBar uppy={uppy} id="hello" />
      </div>

      <div style={{ display: 'flex', gap: 2 }}>
        {isUploading && (
          <>
            <button onClick={abortUpload} style={{ background: 'red' }}>
              Abort
            </button>

            {isPaused ? (
              <button onClick={resumeUpload} style={{}}>
                Resume
              </button>
            ) : (
              <button onClick={pauseUpload} style={{}}>
                Pause
              </button>
            )}
          </>
        )}
        {errorUploading ? (
          <button onClick={retryUpload}>Retry</button>
        ) : (
          <button onClick={startUpload} disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
        )}
      </div>
    </div>
  )

  // Handlers

  function uploadComplete() {
    setIsUploading(false)
  }

  function uploadSuccess(file: UppyFile) {
    uploadedFiles.push(file)
    setUploadedFiles([...uploadedFiles])
  }

  function filesChanged() {
    setFiles(uppy.getFiles())
  }

  function startUpload() {
    uppy.upload()
    setIsUploading(true)
  }

  function abortUpload() {
    uppy.cancelAll()
    setIsUploading(false)
  }

  function retryUpload() {
    uppy.retryAll()
    setIsUploading(true)
  }

  function pauseUpload() {
    uppy.pauseAll()
    setIsPaused(true)
  }

  function resumeUpload() {
    uppy.resumeAll()
    setIsPaused(false)
  }

  function uploadError(file: UppyFile, error: Error) {
    setErrorUploading(error)
    setIsUploading(false)
  }
}

export default FileUpload
