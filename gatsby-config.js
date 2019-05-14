require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title : "AirbnbPriceEstimator",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`
  ],
  pathPrefix: "/AirbnbEstimatorFrontend"
}
