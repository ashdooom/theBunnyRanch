import React, { Component, useState } from 'react';
import Header from './Header';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BunnyTreats from './Pages/BunnyTreats';
import BunnyRescue from './Pages/BunnyRescue';
import AdoptionPage from './Pages/AdoptionPage';
import Cart from './Pages/Cart';
import ContactUs from './Pages/ContactUs';



function App() {
  const [bunList, setBunList] = useState([
    {
      id: 0,
      name: 'Mocha',
      price: '$50'

    },
    {
      id: 1,
      name: 'Melody',
      price: '$50'
    },
    {
      id: 2,
      name: 'Cupcake',
      price: '$50'
    },
    {
      id: 3,
      name: 'Donut',
      price: '$50'
    },
  
    {
      id: 4,
      name: 'Leon',
      price: '$50'
    },
    {
      id: 5,
      name: 'Princess',
      price: '$50'
    },
    {
      id: 6,
      name: 'Bruiser',
      price: '$50'
    },
    {
      id: 8,
      name: 'Billie',
      price: '$50'
    }

  ])



  return (
    <>
      <div className='App'>
        <Header />
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/pages/BunnyTreats" element={<BunnyTreats />} />
          <Route path="/AdoptionPage" element={<AdoptionPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ContactUs" element={<ContactUs />} />

        </Routes>
      </div>
      <>

      </>
    </>
  )
}



export default App;