/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Oyuna",
    author: "Oyuna Tsybdenova",
    siteUrl: `https://www.oyuna.dev/`,
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/llama.png`,
      },
    },
  ],
}