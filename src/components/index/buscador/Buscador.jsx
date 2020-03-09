import React from "react"
import { Container } from "../../utils/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Buscador = () => {
  return (
    <Container className="mb-5">
      <div>
        <div className="rounded pl-3 border lg:w-4/5 xl:w-2/5 flex items-center">
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
          <input className="flex-1 px-2" type="text" placeholder="buscar..." />
          <button className="py-2 bg-primary-400 rounded px-3 sm:px-5 text-white">
            Buscar
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Buscador
