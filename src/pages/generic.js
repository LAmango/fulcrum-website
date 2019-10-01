import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => {
  console.log(props.data)
  return (
    <Layout>
      <Helmet>
        <title>Generic - Forty by HTML5 UP</title>
        <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          {props.data.allMarkdownRemark.edges.map(post => (
            <div className="inner">
              <header className="major">
                <h1>{post.node.frontmatter.title}</h1>
              </header>
              <span className="image main">
                <img src={pic11} alt="" />
              </span>
              <p>{post.node.internal.content}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}
export default Generic

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          internal {
            content
          }
          frontmatter {
            date
            description
            title
          }
        }
      }
    }
  }
`
