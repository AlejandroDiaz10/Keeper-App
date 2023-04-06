import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            {/* <p>Made by Alejandro Díaz</p> */}
            <p>Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;