/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="banner-class">
      <StaticImage
        className="banner-class"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/down-fuji.jpg"
        width={300}
        height={100}
        quality={95}
        alt="Down Mt Fuji"
      />
    </div>
  )
}

export default Banner
