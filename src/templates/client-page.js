import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'

export const ClientPageTemplate = props => {
  const {company, mainImage, gallery = [], content, isMarkdown} = props;
  const otherImages = gallery.length ? gallery.splice(1) : [];
  return (
    <Layout>
      <Helmet title={`Fulcrum | ${company}`}/>
      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{company}</h1>
            </header>
            <div className="grid-wrapper">
              <div className="col-8">
                <span className="image fit">
                {
                  mainImage.childImageSharp ?
                    <Img fluid={mainImage.childImageSharp.fluid} alt={mainImage.alt} /> :
                    <img src={mainImage.image} alt={mainImage.alt}/>
                }
                </span>
              </div>
              <div className="col-4">
                <header className="major">
                  <h3>What We Did</h3>
                </header>
                {isMarkdown ?
                  <ReactMarkdown source={content} /> :
                  <div dangerouslySetInnerHTML={{__html: content}}/>
                }
              </div>
                  {otherImages.map(({image, alt}) => (
                    <div key={alt} className="col-4" style={{width: 200}}>
                    <span className="image fit">
                      {image.childImageSharp ?
                        <Img fluid={image.childImageSharp.fluid} alt={alt} /> :
                        <img src={image} alt={alt} />}
                    </span>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </div>
  </Layout>
  )
}

const ClientPage = props => {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark
  return (
      <ClientPageTemplate
        company={frontmatter.company}
        mainImage={frontmatter.mainImage}
        gallery={frontmatter.gallery}
        content={html}
      />
  )
}

ClientPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default ClientPage

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
            frontmatter {
                company
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

/*

                gallery {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
 */
