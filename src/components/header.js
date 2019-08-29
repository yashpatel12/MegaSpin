import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import HeaderStyle from "./header.module.scss" 

const Header= () =>{
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
          }
        }
      }
    `)  
return(
    <header className={HeaderStyle.header}>
        <h1>
            <Link className={HeaderStyle.title} activeClassName={HeaderStyle.megaimg} to ="/">
            {data.site.siteMetadata.title}
            </Link>
        </h1>
        <nav>
            <ul className={HeaderStyle.navigationlist}>
                <li>
                    <Link className={HeaderStyle.link} activeClassName={HeaderStyle.activelink} to="/">Home</Link>
                </li>
                <li>
                    <Link className={HeaderStyle.link}activeClassName={HeaderStyle.activelink} to="aboutus">About Us</Link>
                </li>
                <li>
                    <Link className={HeaderStyle.link} activeClassName={HeaderStyle.activelink} to="contactus">Contact Us</Link>
                </li>
                <li>
                    <Link className={HeaderStyle.link} activeClassName={HeaderStyle.activelink} to="site">Test Page</Link>
                </li>
            </ul>
        </nav>    
    </header>
)
}
export default Header