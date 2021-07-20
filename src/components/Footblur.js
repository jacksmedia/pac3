import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = () => {
  const ethWallet = "0xfe130864ccFfA959C2cAd1A96bC5c625748130b5"
  const btcWallet = "1G4zZpnha3RvdbMxujreWhChXaeTvo3E62"
  return(
    <div className="footsie">        
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
      <p>Donate ETH</p>
      <h6>{ethWallet}</h6>
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
      <p>Donate BTC</p>
      <h6>{btcWallet}</h6>
    </div>
  )
}
export default Footblur