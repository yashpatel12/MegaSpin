import React from "react"
import FooterStyle from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby";
const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
return(
    <footer>
        <p>Created by <a className= {FooterStyle.contactlink} href="https://twitter.com/@Yash___Patel_">{data.site.siteMetadata.author}</a>, © 2019</p>
    </footer>
)
}
export default Footer