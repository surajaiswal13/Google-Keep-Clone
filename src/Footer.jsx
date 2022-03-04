import React from "react"

function Footer() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return <footer>
        <p>CopyRight © {currentYear}</p>
    </footer>
}

export default Footer;