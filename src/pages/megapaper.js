import React from "react"
//import makeCarousel from 'react-reveal/makeCarousel';
//import Slide from 'react-reveal/Slide';

import Layout from "../components/layout";
import {graphql, useStaticQuery} from "gatsby"
const Megapaper = () =>{
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            MegaPaper
          }
        }      
        allMarkdownRemark (filter: {frontmatter: {tag: {eq: "Megapaper"}}}) {
          edges{
            node{
              frontmatter{
                title 
              }
            }
          }
        }
    }
    `)
    return(
    <Layout>
    <h2>{data.site.siteMetadata.MegaPaper}</h2>
    </Layout>
    )
}
export default Megapaper