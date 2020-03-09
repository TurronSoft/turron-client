import React from "react"
import Header from "../components/header/Header"
import MasterPage from "../layout/MasterPage"
import GrillaPrincipal from "../components/index/GrillaPrincipal"
import Buscador from "../components/index/buscador/Buscador"

const Index = () => {
  return (
    <MasterPage>
      <Buscador />
      <GrillaPrincipal />
      <GrillaPrincipal />
    </MasterPage>
  )
}

export default Index
