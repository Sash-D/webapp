module.exports = {
  pathPrefix: 'webapp',
  siteMetadata: {
    title: `B.Lazic Co LLC`,
    description: `Business Lawyers`,
    author: `lazicco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
              include: /svg/, // See below to configure properly
          },
      },
  },
  {
      resolve: 'gatsby-plugin-stylelint',
      options: {
          emitErrors: false,
      },
  },
  {
      resolve: 'gatsby-plugin-eslint',
      options: {
          test: /\.js$|\.jsx$/,
          exclude: /(node_modules|.cache|public)/,
          stages: ['develop'],
          options: {
              emitWarning: true,
              failOnError: false,
          },
      },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `montserrat\:300,400,600,800`,
        `open sans\:300,400,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleAnalytics: {
        trackingId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-analytics', // default
        anonymize: true // default
      },
      googleTagManager: {
        trackingId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-tagmanager', // default
        dataLayerName: 'dataLayer', // default
      },
      facebookPixel: {
        pixelId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-facebook-pixel', // default
      },
      // defines the environments where the tracking should be available  - default is ["production"]
      environments: ['production', 'development']
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
