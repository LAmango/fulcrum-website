import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import BannerBlog from '../components/BannerBlog'

const Blog = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Fulcrum Blog</title>
      <meta name="Fulcrum Blog" content="Blog Page" />
    </Helmet>

    <BannerBlog />

    <div id="main">
      <section id="two" className="spotlights">
        {data.allMarkdownRemark.edges.map(post => (
          <section>
            <Link to={`blog${post.node.fields.slug}`} className="image image-blog">
              <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />
            </Link>
            <div className="content">
              <div className="inner">
                <Link to={`blog${post.node.fields.slug}`}>
                  <header className="major">
                    <h3>{post.node.frontmatter.title}</h3>
                  </header>
                </Link>
                <p className="excerpt">{post.node.excerpt}</p>
                <ul className="actions">
                  <li>
                    <Link to={`blog${post.node.fields.slug}`} className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
            fields {
                slug
            }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
