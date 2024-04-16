import React from "react";
import "./Offers.css";

//import modulů
import Navbar from "../../modules/navbar/Navbar"
import Footer from "../../modules/footer/Footer"
import Offer from "../../modules/offer/Offer";


import image1 from "../../media/working-with-laptop.svg"
import image2 from "../../media/file-and-folder.svg"
import image3 from "../../media/logistics.svg"
import image4 from "../../media/mobile-testing-and-group-discussion.svg"
import image5 from "../../media/calendar.svg"
import image6 from "../../media/analyze-on-screen.svg"
 

const offerList = [
    {
        id: 1,
        title: "Design",
        description: "Nadesignuji pro vás například logo, vizitku, banner a další.",
        image: image1,
    },
    {
        id: 2,
        title: "Rebranding",
        description: "Již se vám nelíbí jak vypadá váš brand? Převléknu ho do moderního obleku, ale zachovám původní myšlenku.",
        image: image2,
    },
    {
        id: 3,
        title: "Vytvoření brandingu",
        description: "Vytvořím pro vás veškeré potřebné designy a podklady pro váš brand. včetně: loga, barevné palety, fontů, bannerů, vizitek a dalších.",
        image: image3,
    },
    {
        id: 4,
        title: "Jednoduchý web",
        description: "Nepotřebujete nic složitého? Chcte se prezentovat a zaujmout moderním webem? Udělám pro vás jednduchý web ušitý vám na míru.",
        image: image4,
    },
    {
        id: 5,
        title: "Webová aplikace",
        description: "Složitější webové aplikace spracovávám s pomocí dalších 2 kolegů, proto můžeme zajistit moderní, spolehlivý a dobře zabezpečneý web.",
        image: image5,
    },
    {
        id: 6,
        title: "Ostatní",
        description: "Je něco o co byste měli zájem a neni to tu uvedeno?",
        image: image6,
    }
]

const Offers = () => {
    return <>
    <Navbar></Navbar>
    <div className="offerList">
    <div className="scaling animated-down"><Offer title = {offerList[0].title} description = {offerList[0].description} image = {offerList[0].image}/></div>
    <div className="scaling animated-down"><Offer title = {offerList[1].title} description = {offerList[1].description} image = {offerList[1].image}/></div>
    <div className="scaling animated-down"><Offer title = {offerList[2].title} description = {offerList[2].description} image = {offerList[2].image}/></div>
    <div className="scaling animated-down"><Offer title = {offerList[3].title} description = {offerList[3].description} image = {offerList[3].image}/></div>
    <div className="scaling animated-down"><Offer title = {offerList[4].title} description = {offerList[4].description} image = {offerList[4].image}/></div>
    <div className="scaling animated-down"><Offer title = {offerList[5].title} description = {offerList[5].description} image = {offerList[5].image}/></div>
    </div>
    <Footer></Footer>

    </>
}

export default Offers;