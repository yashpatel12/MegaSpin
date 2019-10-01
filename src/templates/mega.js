import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

//This automtion can be done later
export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: {slug: {eq: $slug}}){
        frontmatter {
            title
        }
        html
        }
    }    
    `

const mega =(props) =>{
    return(
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}
export default mega
