var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
    enableIdentityWidget: false,
  },
}

module.exports = {
  siteMetadata: {
    title: 'Fulcrum Websites and Marketing',
    author: 'Lucas Albano',
    description:
      'A one stop shop for all needs website, marketing and social media',
  },
  plugins: [
    'gatsby-plugin-sass',
    netlifyCmsPaths,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/fulcrum_logo_final.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    //'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clients`,
        path: `${__dirname}/content/clients`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/content/packages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlFavicon: 'src/assets/images/fulcrum_logo_final.png',
        enableIdentityWidget: true,
      },
    },
    "gatsby-plugin-netlify"
  ],
}
