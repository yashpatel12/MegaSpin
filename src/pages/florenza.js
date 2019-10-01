import React from "react"
import Layout from "../components/layout";
import Florenzaicon from "../icons/florenza.jpg"
import {Link, graphql, useStaticQuery} from "gatsby"
import SlideShow from '../components/slideshow.js'
import Headerstyle from "../components/header.module.scss"
const Florenza = () =>{
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            Florenza
          }
        }      
        allMarkdownRemark (filter: {frontmatter: {tag: {eq: "Florenza"}}}) {
          edges{
            node{
              fields{
                slug
              }
              frontmatter{
                title 
              }
              html
            }
          }
        }
      }`)
      return(
    <Layout>
        <SlideShow /> 
        <h2>
          <Link className={Headerstyle.title} to='./florenza'><img src={Florenzaicon} alt="florenza" width="40" height="40" align={"left" && "top"}/>
          {data.site.siteMetadata.Florenza}
          </Link>
        </h2>

        <ol className={Headerstyle.navigationlists}>
            {data.allMarkdownRemark.edges.map((edge)=>{
                return(
                    <li>
                      <Link to={`/florenza/${edge.node.fields.slug}`}>
                        <h3> {edge.node.frontmatter.title}</h3>       
                      </Link>                 
                        <div dangerouslySetInnerHTML={{__html: edge.node.html}}></div>
                    </li>
                )
            })}
        </ol>
    </Layout>
    )
}
export default Florenza
