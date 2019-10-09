import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => {
  console.log(props)
  const { markdownRemark } = props.data
  const { frontmatter, internal } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>Generic - Forty by HTML5 UP</title>
        <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
            </header>
            <span className="image main">
              <img src={pic11} alt="" />
            </span>
            <p className="content">{internal.content}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Generic

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      internal {
        content
      }
    }
  }
`
