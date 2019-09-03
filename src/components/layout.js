import React from "react"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"
import "../style/style.scss"
import LayoutStyles from "./layout.module.scss"
const Layout = (props) =>{
    return(
        <div className={LayoutStyles.container}>
        <div className={LayoutStyles.content}>
            <Header />
            <SideBar />
            {props.children}          
        </div>
            <Footer />
        </div>
    )
}
export default Layout