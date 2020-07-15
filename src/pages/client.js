import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import { graphql, Link } from 'gatsby'
import Banner from '../components/Banner'

const Client = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>Fulcrum | Client</title>
        <meta name="Fulcrum Clients" content="Client Page" />
      </Helmet>

      <Banner
        style="style4"
        title={"Clients"}
        subTitle={"Here are some clients we've made websites for!"}
      />

      <div id="main">
          <section id="two" className="content">
            <div className="grid-wrapper">
              {edges.map((client, index) => (
                <div key={index} className="col-6 clientBox">
                  <Img
                    fluid={client.node.frontmatter.mainImage.childImageSharp.fluid}
                    alt={client.node.frontmatter.mainImage.alt}
                  />
                    <Link to={`${client.node.fields.slug}`} className="clientName button fit small sm-button">
                      {client.node.frontmatter.company}
                    </Link>
                </div>
              ))}
            </div>
          </section>
      </div>
    </Layout>
  )
}

export default Client

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: { key: { eq: "client-page" } }}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        mainImage {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        company
                    }
                    
                }
            }
        }
    }
`
/*

                        gallery {
                            alt
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
 */
