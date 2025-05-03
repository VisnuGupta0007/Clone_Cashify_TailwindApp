import React from 'react';
import './App.css';
import Navbar from './Nav & Footer/Navbar';
import Service from './Devices/Service';
import OldDevice from './Devices/OldDevice';
import RefurbishedDevice from './Devices/RefurbishedDevice';
import RefurbishedLaptops from './Devices/RefurbishedLaptops';
import Store from './Store';
import Slider from './Slider';
import Marque from './Marque';
import Deals from './Devices/Deals';
import Download from './Devices/Download';
import Footer from './Nav & Footer/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Service />
      <OldDevice />
      <RefurbishedDevice />
      <RefurbishedLaptops />
      <Store />
      <Marque />
      <Deals />
      <Download />
      <Footer/>
    </>
  );
}

export default App;
