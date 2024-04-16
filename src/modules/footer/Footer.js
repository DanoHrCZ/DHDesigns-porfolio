import React from "react";
import  logoNapis  from "../../media/cerne-logo-napis.svg";
import "./Footer.css"

const Footer = () => {

    return <>
    <div className="footerWrapper">
    <div className="footerInformations">
        <p>Daniel Hrečin</p>
        <p>Design | Web Development | Audio Engineering</p>
    </div>
    <img className="footerLogo" src={logoNapis} alt="logo s nápisem" />
    </div>
    </>
}

export default Footer;