/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/generic.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              date
              title
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { id, frontmatter, internal } = node

    var event = new Date(frontmatter.date)
    var event2 = new Date()

    if (
      event.getDate() === event2.getDate() &&
      event.getMonth() === event2.getMonth() &&
      event.getFullYear() === event2.getFullYear()
    ) {
      console.log('same date!: ', frontmatter.title)
      // here we can make api calls to facebook and twitter so that the new blog can be shared
    }

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        id,
        frontmatter,
        internal,
      }, // additional data can be passed via context
    })
  })
}
