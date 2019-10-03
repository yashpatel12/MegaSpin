import React from "react"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"
import LayoutStyles from "./layout.module.scss"
const Layout = (props) =>{
    return(
        <div className={LayoutStyles.container}>
        <div className={LayoutStyles.content}>
        <title> Megaspin Group </title>
            <Header />
            <SideBar />
            {props.children}          
        </div>
            <Footer />
        </div>
    )
}
export default Layout
