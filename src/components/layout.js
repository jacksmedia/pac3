import * as React from 'react'
import PropTypes from 'prop-types'
import Footblur from './Footblur'
import Navbar from './Navbar/Navbar'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/` // boolean test: y/n Home icon aside app title
  const isRootPath = location.pathname === rootPath
  let headerLogo
  if (isRootPath) {
    headerLogo = (
      <h3 className="cinzel">
        {title}
      </h3>
    )
  } else {
    headerLogo = (
      <h5 className="cinzel chromatic">
        <Link to="/">
        <FontAwesomeIcon icon={faHome} />
          <span>&nbsp;</span>
        {title}
        </Link>
      </h5>
    )
  } // end boolean Home icon feature

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="mains">{children}</section>
      <footer>
        <Footblur />
      </footer>
    </div>
  )
}

export default Layout
