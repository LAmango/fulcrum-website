import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

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
            <Link to={post.node.frontmatter.path} className="image">
              <img src={pic08} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>{post.node.frontmatter.title}</h3>
                </header>
                <p>{post.node.excerpt}</p>
                <ul className="actions">
                  <li>
                    <Link to={post.node.frontmatter.path} className="button">
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
          frontmatter {
            date
            path
            title
          }
          excerpt
        }
      }
    }
  }
`
