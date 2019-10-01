module.exports = {
  siteMetadata: {
    title: "MegaSpin Group",
    MegaPack:"MegaPack",
    MegaPaper:"MegaPaper",
    Florenza:"Florenza",
    SierraFlora:"Sierra Flora",
    Roseto:"Roseto",
    author: "Yash Patel"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'src',
        path:`${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    }
  ]
}
