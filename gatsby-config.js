module.exports = {
  siteMetadata: {
    title: "MegaSpin Group",
    subtitle1:"MegaPack",
    subtitle2:"MegaPaper",
    subtitle3:"Florenza",
    subtitle4:"Sierra Flora",
    subtitle5:"Roseto",
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
    'gatsby-transformer-remark'
  ]
}
