import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Container } from "../utils/Container"

const ItemNav = styled(Link)`
  ${tw`font-semibold px-2 py-1 flex items-center rounded`};
`
const NavBar = styled.nav`
  ${tw`hidden md:flex items-center`};
  .active {
    ${tw`flex text-primary-400 bg-blue-100`};
  }
`

const Header = () => {
  return (
    <header className="shadow py-5 mb-5">
      <Container className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            Título
          </Link>
        </h1>
        <NavBar>
          <ul className="flex lg:mr-2 xl:mr-10">
            <li className="md:mx-2 xl:mx-4">
              <ItemNav activeClassName="active" to="/">
                Home
              </ItemNav>
            </li>
            <li className="md:mx-2 xl:mx-4">
              <ItemNav activeClassName="active" to={"/products"}>
                <span>Products</span>
                <FontAwesomeIcon
                  className="ml-2 text-xs text-gray-600"
                  icon={faChevronDown}
                />
              </ItemNav>
            </li>
            <li className="md:mx-2 xl:mx-4">
              <ItemNav activeClassName="active" to={"/about"}>
                About
              </ItemNav>
            </li>
            <li className="md:mx-2 xl:mx-4">
              <ItemNav activeClassName="active" to={"/blog"}>
                Blog
              </ItemNav>
            </li>
          </ul>
          <Link
            to="/nuevo/nuevoArticulo"
            className="hidden lg:flex items-center py-1 px-5 bg-primary-400 hover:bg-primary-600 duration-100 text-white rounded"
          >
            <span>Nuevo Producto </span>
            <FontAwesomeIcon className="ml-2 text-xs" icon={faPlus} />
          </Link>
          <hr className="border w-8 transform rotate-90 mx-2" />
          <Link
            to="/perfil"
            className="w-10 h-10 rounded-full bg-gray-200"
          ></Link>
          <button className="w-5 h-5">
            <FontAwesomeIcon
              className="ml-2 text-xs text-gray-600"
              icon={faChevronDown}
            />
          </button>
        </NavBar>
        <Link
          to="/perfil"
          className="block md:hidden w-10 h-10 rounded-full bg-gray-200"
        ></Link>
      </Container>
    </header>
  )
}

export default Header
