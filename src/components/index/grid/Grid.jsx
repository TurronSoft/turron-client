import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export const GridContainer = ({ children }) => (
  <div className="lg:mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-7 items-start gap-1 md:gap-2">
    {children}
  </div>
)
export const GridColumn = ({ children }) => (
  <div className="grid gap-1 md:gap-2">{children}</div>
)
export const GridItem = ({ urlImage }) => (
  <div
    className="rounded relative duration-100"
    css={css`
      &:hover {
        img {
          transition: 100ms;
          filter: blur(1px) brightness(0.6);
          transition-delay: 100ms;
        }
        button {
          display: block;
        }
      }
    `}
  >
    <Link to="/publicacion/publicacion">
      <img src={urlImage} className="w-full rounded" alt="" />
    </Link>
    <button
      className="hidden absolute text-gray-400"
      css={css`
        top: 1rem;
        right: 1rem;
        font-size: 18px;
      `}
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </button>
  </div>
)
