module.exports = {
  siteMetadata: {
    title: `Allen K Abraham`,
  },
  plugins: [
    'gatsby-plugin-sass',
     'gatsby-remark-relative-images',
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}