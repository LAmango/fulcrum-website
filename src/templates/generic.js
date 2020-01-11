import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

export const BlogPostTemplate = ({content, title, image}) => {
  // eslint-disable-next-line no-undef
  console.log(title, image);
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Blog post" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{title}</h1>
            </header>
            <span className="image main">
                {!!image.childImageSharp ? (
                  <Img fluid={image.childImageSharp.fluid} />
                ) : (
                  <img src="image" alt="blog post image"/>
                )}
              </span>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

const Generic = props => {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;
  console.log("gen: ", frontmatter.image)
  return (
    <BlogPostTemplate
      content={html}
      title={frontmatter.title}
      image={frontmatter.image}
    />
  )
}
export default Generic

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            internal {
                content
            }
        }
    }
`