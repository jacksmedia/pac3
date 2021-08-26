import React, { useState, setState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Imager from "../components/imager"
import IO from "../components/io"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.li`
  border-radius: 1vw;
  padding: 2rem;
  margin: 4.85rem 0.85rem 1.85rem 0.85rem;
  transition: background-color 1.3s ease;
  background-color: ${({ isVisible }) => (isVisible ? 'snow' : '#9CB5CE')};
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const fade = useState(false)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <ol style={{ listStyle: `none` }} className="main-list mains">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <IO rootMargin = '-50px'>
              {({isVisible})=>(
                <Post key={post.fields.slug} isVisible={isVisible}>
                  <article
                    className="post-list-item chromatic"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <Imager
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                     />
                    <header>
                      <h2 className="bold">
                        <AniLink paintDrip to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </AniLink>
                      </h2>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Post>
              )}
              </IO>
            )
          })}
        </ol>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
