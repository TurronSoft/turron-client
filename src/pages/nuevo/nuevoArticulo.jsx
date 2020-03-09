import React from "react"
import MasterPage from "../../layout/MasterPage"
import { Container } from "../../components/utils/Container"
import ViewNuevoArticulo from "../../components/nuevo/ViewNuevoArticulo"

const nuevoArticulo = () => {
  return (
    <MasterPage defaulHeader={false}>
      <Container>
        <ViewNuevoArticulo />
      </Container>
    </MasterPage>
  )
}

export default nuevoArticulo
