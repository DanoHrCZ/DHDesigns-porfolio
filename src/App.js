// importování rotes
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// importování stránek
import LandingPage from "./pages/landingPage/LandingPage"
import Portfolio from "./pages/portfolio/Portfolio"
import Offers from "./pages/offers/Offers"
import Contacts from "./pages/contacts/Contacts"


const App = () =>{
return<BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/offers' element={<Offers />} />
              <Route path='/contacts' element={<Contacts />} />
          </Routes>
      </BrowserRouter>
}

export default App