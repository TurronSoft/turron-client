import React, { useState } from "react"
import FileDrop from "react-file-drop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"

const UploadArea = ({ obtenerDatos }) => {
  const handleDrop = (files, event) => {
    obtenerDatos(files)
  }
  return (
    <div>
      <FileDrop
        onDrop={handleDrop}
        className="border rounded bg-orange-100 border-secondary-400 text-secondary-400 py-10 flex justify-center"
      >
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUpload} className="text-3xl mb-2" />
          <span>Arrastra tus imágenes aquí</span>
        </div>
      </FileDrop>
    </div>
  )
}

export default UploadArea
