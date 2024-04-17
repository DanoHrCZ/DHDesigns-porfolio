import React from "react";
import image from "../../media/calendar.svg"

//import modulů
import Navbar from "../../modules/navbar/Navbar"
import Footer from "../../modules/footer/Footer"

const Contacts = () => {
    return <>
    <Navbar></Navbar>
    <div className="section">
    <div className="animated-left">
    <p>Pokud máte zájem, napište mi prosím email. Email by měl obsahovat veškeré vaše požadavky a pokud je to potřeba, tak i soubory, se kterýma bych měl pracovat. Potom se domluvíme na veškerých podmínkách a já začnu pracovat na vaší zakázce.</p>
    <p>email: <a className="a" href="mailto:daniel.hrecin@gmail.com">daniel.hrecin@gmail.com</a></p>
    <p>Telefon: <a className="a" href="tel:+420773737985">+420 773 737 985</a></p>
    <p>Instagram: <a className="a" href="https://www.instagram.com/danhrec_/">@danhrec_</a></p>
    <p>GitHub: <a className="a" href="https://github.com/DanoHrCZ">DanoHrCZ</a></p>

    </div>
    <div className="animated-right" ><img src={image} alt="" /></div>
    </div>

    <Footer></Footer>
    </>
}

export default  Contacts;