import React from "react"
import { GridContainer, GridColumn, GridItem } from "./grid/Grid"
import { Container } from "../utils/Container"

const GrillaPrincipal = () => {
  return (
    <Container>
      <GridContainer>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606231/ROPA-URBANA-_mo3g4h.webp"
            }
          />
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606231/rock-desing-1_i7hdkb.webp"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606231/rock-desing-1_i7hdkb.webp"
            }
          />
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606220/deec29db08cfbe50c529aecd7c9a9039_nwzubm.jpg"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606230/trajes-invitados-bodas-06-768x1151_ombquo.webp"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606225/44dce0dad16454fce504c8a1d2de922f_y1nstj.jpg"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606224/2f0cc89f15fbd482d52bf23fab48a17d-1_cl2udt.jpg"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606224/33cd84956b01c43cd46d74b94a937827_misyzm.jpg"
            }
          />
        </GridColumn>
        <GridColumn>
          <GridItem
            urlImage={
              "https://res.cloudinary.com/decaxvp8u/image/upload/v1579606220/deec29db08cfbe50c529aecd7c9a9039_nwzubm.jpg"
            }
          />
        </GridColumn>
      </GridContainer>
    </Container>
  )
}

export default GrillaPrincipal
