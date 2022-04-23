module.exports = {
  siteMetadata: {
    title: `Free Food 🎵`,
    siteUrl: `http://freefood.band`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-1CF5H7E26H"
    }
  }]
};