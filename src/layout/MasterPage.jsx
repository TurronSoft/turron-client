import React from "react"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"
import Header from "../components/header/Header"

const MasterPage = ({ children, defaulHeader }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {defaulHeader == false ? null : <Header />}
      <main>{children}</main>
      <Global
        styles={css`
          * {
            font-family: "Mukta", sans-serif;
            outline: none !important;
          }
        `}
      />
    </>
  )
}

export default MasterPage
