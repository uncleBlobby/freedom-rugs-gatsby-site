module.exports = {
  siteMetadata: {
    title: `Freedom Rugs`,
    siteUrl: `http://www.freedomrugs.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
