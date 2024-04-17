import React from "react";
import  logoNapis  from "../../media/cerne-logo-napis.svg";
import  logoCode from "../../media/logo_none_background.png";
import "./Footer.css"

const Footer = () => {

    return <>
    <div className="footerWrapper">
    <div className="footerInformations">
        <p>Daniel Hrečin</p>
        <p>IČO: </p>
        <p>Design | Web Development | Audio Engineering</p>
    </div>
    <div className="footerImgs">
    <img className="footerLogo" src={logoNapis} alt="logo s nápisem" />
    <img className="footerLogo" src={logoCode} alt="logo s nápisem" />
    </div>
    </div>
    </>
}

export default Footer;