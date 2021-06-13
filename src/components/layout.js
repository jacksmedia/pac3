import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="cinzel">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h5 className="cinzel">
        <Link to="/">{title}</Link>
      </h5>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <section>{children}</section>
      <footer className="footsie">        
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {` `}{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default Layout
