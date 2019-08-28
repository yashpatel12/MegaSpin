import React from "react"
import FooterStyle from "./footer.module.scss"
const Footer = () =>{
return(
    <footer>
        <p>Created by <a className={FooterStyle.contactlink} href="https://twitter.com/@Yash___Patel_"target="_blank">Yash Patel</a>,© 2019</p>
    </footer>
)
}
export default Footer