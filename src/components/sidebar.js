import React from "react"
import { Link } from "gatsby"
import SideBarStyle from "../components/sidebar.module.scss"

const SideBar=()=>{
    return(
            <nav className={SideBarStyle.nav}>
                <ul className={SideBarStyle.navigationlist}>
                    <li ><Link className={SideBarStyle.link} activeClassName={SideBarStyle.activelink} to ="/megapack">Megapack</Link> </li>    
                    <li> <Link className={SideBarStyle.link} activeClassName={SideBarStyle.activelink} to ="/megapaper">Megapaper</Link> </li>
                    <li> <Link className={SideBarStyle.link} activeClassName={SideBarStyle.activelink} to ="/florenza">Florenza</Link> </li>
                    <li> <Link className={SideBarStyle.link} activeClassName={SideBarStyle.activelink} to ="/sierra">Sierra FLora</Link> </li>
                    <li> <Link className={SideBarStyle.link} activeClassName={SideBarStyle.activelink} to ="/roseto">Roseto</Link> </li>
                </ul>
            </nav>        
    )
}
export default SideBar