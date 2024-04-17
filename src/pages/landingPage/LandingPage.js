import React from "react";
import img1 from "../../media/working-with-laptop.svg"
import img2 from "../../media/logistics.svg"
import "./LandingPage.css"
import { Link } from "react-router-dom";


//import modulů
import Navbar from "../../modules/navbar/Navbar"
import Footer from "../../modules/footer/Footer"

const LandingPage = () => {
    return <>
    <Navbar></Navbar>
    <div className="section">
    <div className="animated-left">
        <h1>Jmenuji se Daniel Hrečin</h1>
        <p>jsem student VOŠ a SPŠE Plzeň. Od doby co studuji jezdím na programátorské soutěže, kde většinou zpracovávám design a frontend webových aplikací.</p>
        <p>Na stránce <Link className="a" to="/portfolio">portfolio</Link> můžete najít projekty na kterých jsem se podílel.</p>
        <p>Dále mě můžete sledovat na <a className="a" href="https://www.instagram.com/danhrec_/">instagramu</a>, nebo na mém <a className="a" href="https://github.com/DanoHrCZ">GitHubu</a>.</p>
    </div>
    <div className="animated-right"><img src={ img1 } alt="" /></div>
    </div>
    <div className="section">
    <div className="animated-left img1"><img src={ img2 } alt="" /></div>
    <div className="animated-right">
        <h1>Co mohu nabídnout?</h1>
        <p>Potřebujete vytvořit branding pro váš projekt? Design, nebo celou webovou stránku?</p>
        <p>Vytvořím váš brand od loga, až po vizitky.</p>
        <p>Dělám moderní minimalistický design, který je nejen příjemný na oko, ale zapůsobí jak na mladou generaci, tak na starší, kteří nebudou mít problém se na vašich stránkách zorientovat.</p>
        <p>Pokud máte zájem, podívejte se na stránku mích předpřipravených <Link className="a" to="/offers">nabídek</Link>.</p>
        <p>Na stránce <Link className="a" to="/portfolio">portfolio</Link> můžete najít projekty na kterých jsem se podílel.</p>
    </div>
    </div>
    <Footer></Footer>
    </>
}

export default LandingPage;