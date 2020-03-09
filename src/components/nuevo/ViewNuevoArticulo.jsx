import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapSigns,
  faCar,
  faMicrochip,
  faTshirt,
  faCog,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import FormularioTelefonos from "./formularios/tecnologia/FormularioTelefonos"
import { Link } from "gatsby"
import UploadArea from "./formularios/tecnologia/UploadArea"

const ViewNuevoArticulo = () => {
  const [datos, setDatos] = useState("")
  return (
    <form>
      <div className="mt-10 flex justify-between">
        <Link to="/" className="text-secondary-400">
          <FontAwesomeIcon className="mr-3" icon={faChevronCircleLeft} />
          <span>Volver</span>
        </Link>
        <FontAwesomeIcon icon={faCog} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl  mt-10 text-gray-600">todos los detalles</h1>
        <h1 className="text-3xl mb-10  font-semibold">
          Crea un nuevo Producto
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-3">
          <span>Categorías</span>
          <nav>
            <ul>
              <li className="p-2 mb-2 rounded bg-blue-100 text-primary-200">
                <FontAwesomeIcon className="mr-3" icon={faTshirt} />
                <span>Ropa</span>
              </li>
              <li className="p-2 mb-2 rounded bg-blue-100 text-primary-200">
                <FontAwesomeIcon className="mr-3" icon={faMicrochip} />
                <span>Tecnología</span>
              </li>
              <li className="p-2 mb-2 rounded bg-blue-100 text-primary-200">
                <FontAwesomeIcon className="mr-3" icon={faCar} />
                <span>Vehículo</span>
              </li>
              <li className="p-2 mb-2 rounded bg-blue-100 text-primary-200">
                <FontAwesomeIcon className="mr-3" icon={faMapSigns} />
                <span>Vienes Raices</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <FormularioTelefonos />
          <UploadArea />
        </div>
        <div className="col-span-2">
          <span>Opciones</span>
          <button className="bg-secondary-100 text-orange-100 rounded w-full border py-1 border-secondary-400 hover:bg-secondary-400 hover:text-white duration-100">
            Agregar
          </button>
          <button className="bg-red-100 text-red-400 rounded w-full border mt-3 py-1 border-red-400 hover:bg-red-400 hover:text-white duration-100">
            Cancelar
          </button>
        </div>
      </div>
    </form>
  )
}

export default ViewNuevoArticulo
