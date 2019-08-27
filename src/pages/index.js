import React from "react"
import {Link} from "gatsby"
require ("./style/style.css")
const IndexPage = () =>{
    return(
        <div>
            <title>First</title>
            <h1>Mega Spin</h1>
            <p><Link to = "/contactus">Contact Us</Link></p> 
            <p><Link to="/aboutus">About Us</Link></p>
         </div>
    )
}
export default IndexPage