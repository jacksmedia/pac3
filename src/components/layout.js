import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const Layout = ({ location, title, children }) => {
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
