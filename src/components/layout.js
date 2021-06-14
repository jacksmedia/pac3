import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let headerLogo

  if (isRootPath) {
    headerLogo = (
      <h1 className="cinzel">
        {title}
      </h1>
    )
  } else {
    headerLogo = (
      <h4 className="cinzel chromatic">
        <Link to="/">
        <FontAwesomeIcon icon={faHome} />
          <span>&nbsp;</span>
        {title}
        </Link>
      </h4>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {headerLogo}
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/wallets" className="navbar-item is-hoverable">Wallets</Link>
              <Link to="/authentication" className="navbar-item is-hoverable">Auth</Link>
              <Link to="/browser" className="navbar-item is-hoverable">Browser</Link>
            </div>
            <div className="navbar-end">
              <Link to="/exchanges" className="navbar-item is-hoverable">Exchanges</Link>
            </div>
          </div>
        </nav>
      </header>
      <section>{children}</section>
      <footer className="footsie">        
        <p>All advice herein is logistical, not financial.</p>
        <p>Coded and designed by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
        <p>
          <StaticImage
            className="tiny-icon"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/eth.svg"
            width={40}
            height={64}
            quality={95}
            alt="Ethereum symbol"
          />
        </p>
        <span>Donate ETH</span>
        <p>
          0xfe130864ccFfA959C2cAd1A96bC5c625748130b5
        </p>
        <p>
          <StaticImage
            className="tiny-icon"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/btc.svg"
            width={64}
            height={64}
            quality={95}
            alt="Bitcoin symbol"
          />
        </p>
        <span>Donate BTC</span>
        <p>
          1G4zZpnha3RvdbMxujreWhChXaeTvo3E62
        </p>
      </footer>
    </div>
  )
}

export default Layout
