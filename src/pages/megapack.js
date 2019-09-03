import React from "react"
import Layout from "../components/layout";
import Megapackicon from "../icons/megapack.png"
import {Link} from "gatsby"
import Headerstyle from "../components/header.module.scss"

const Megapack = () =>{
    return(
    <Layout>
        <h2><Link className={Headerstyle.title} to ='./megapack'><img src={Megapackicon} width="42" height="44" align="left" alt="mega" />MegaPack </Link></h2>
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h4>Our Products</h4> 
        <p><img src={Megapackicon} alt ="megapack" width="75" height="75" align="left"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <img src={Megapackicon} alt ="megapack.png"  width="75" height="75" align="right"/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <h4>Contact Megapack</h4>
        <p>Email: test@test.com<br />Phone: +254712345678</p>
    </Layout>
    )
}
export default Megapack