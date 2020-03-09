import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useState } from "react"

const StyledInput = css`
  ${tw`border border-primary-500 rounded px-3 py-1 focus:shadow-outline-blue text-primary-800`};
  max-height: 200px;
  &::placeholder {
    ${tw`text-blue-300 font-light`};
  }
`
const TitleGroup = styled.label`
  ${tw`font-semibold text-gray-800`};
`
const GrupoInput = styled.div`
  ${tw`flex flex-col mb-5`};
`

const FormularioTelefonos = () => {
  const [datos, setDatos] = useState("")
  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <GrupoInput>
        <TitleGroup htmlFor="titulo">Título</TitleGroup>
        <input
          css={StyledInput}
          onChange={handleChange}
          id="titulo"
          name="titulo"
          placeholder="titulo"
          type="text"
        />
      </GrupoInput>
      <div className="grid grid-cols-3 gap-3">
        <GrupoInput>
          <TitleGroup>Marca</TitleGroup>
          <input
            css={StyledInput}
            onChange={handleChange}
            id="marca"
            placeholder="marca"
            type="text"
            name="marca"
          />
        </GrupoInput>
        <GrupoInput>
          <TitleGroup>Modelo</TitleGroup>
          <input
            css={StyledInput}
            onChange={handleChange}
            id="modelo"
            placeholder="titulo"
            type="text"
            name="modelo"
          />
        </GrupoInput>
        <div className="flex">
          <GrupoInput className="flex items-center flex-1">
            <label htmlFor="">Nuevo</label>
            <input
              id="titulo"
              placeholder="titulo"
              type="radio"
              className="form-radio cursor-pointer mt-2"
              name="estado"
            />
          </GrupoInput>
          <GrupoInput className="flex items-center flex-1">
            <label htmlFor="">Usado</label>
            <input
              id="titulo"
              placeholder="titulo"
              type="radio"
              className="form-radio cursor-pointer mt-2"
              name="estado"
            />
          </GrupoInput>
          <GrupoInput className="flex items-center flex-1">
            <label htmlFor="">Semi usado</label>
            <input
              id="titulo"
              placeholder="titulo"
              type="radio"
              className="form-radio cursor-pointer mt-2"
              name="estado"
            />
          </GrupoInput>
        </div>
      </div>
      <GrupoInput>
        <TitleGroup htmlFor="titulo">Descripcion</TitleGroup>
        <textarea
          css={StyledInput}
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </GrupoInput>
      <GrupoInput>
        <TitleGroup>Precio</TitleGroup>
        <input
          css={StyledInput}
          onChange={handleChange}
          className="w-32"
          name="precio"
          placeholder="$000.00"
          type="text"
        />
      </GrupoInput>
    </>
  )
}

export default FormularioTelefonos
