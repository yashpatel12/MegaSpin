import React from "react"
import Layout from "../components/layout";
import Florenzaicon from "../icons/florenza.jpg"
import {Link, graphql, useStaticQuery} from "gatsby"
import Headerstyle from "../components/header.module.scss"
const Florenza = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
              }
            }
          }
        }
      }`)
    
      console.log(data)
        
      return(
    <Layout>
        <h2><Link className={Headerstyle.title} to='./florenza'><img src={Florenzaicon} alt="florenza" width="42" height="44" align="left"/>Florenza </Link></h2>
        <ol>
            {data.allMarkdownRemark.edges.map((edge)=>{
                return(
                    <li>
                        <h2>{edge.node.frontmatter.title}</h2>
                    </li>
                )
            })}
        </ol>
    </Layout>
    )
}
export default Florenza