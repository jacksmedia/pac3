import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
			<StaticImage
				className="tiny-icon"
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="./logo.png"
				width={132}
				height={64}
				quality={95}
				alt="Jacks Media can help you!"
        />
		</div>
	)
}

export default Logowrap
