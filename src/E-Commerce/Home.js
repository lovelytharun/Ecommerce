import React from 'react';
import './Home.css';
import laptop from '../assets/laptop.jpg'
import oneplus from '../assets/oneplus.jpg'
import redmi from '../assets/redmi.jpg'
import buds from '../assets/buds.jpg'
import headphone from '../assets/headphone.jpg'
import mouse from '../assets/mouse.jpg'

import Navigation from './Navigation';
import Footer from './Footer';
import MyCarousel from './MyCarousel';


export default function Home() {
  return (
    <div>
    <Navigation/>
      <center><h1>Welcome to E-commerce!</h1></center>
      <MyCarousel/>
      <section>
      <h2 className='our' >Our Products</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <br></br>
        <img src={laptop} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 1135G7</h6>
        <br></br>
        <br></br>
        
        <b><p>$46765.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={oneplus} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>OnePlus Nord CE3 5G (Grey Shimmer, 256 GB)  (12 GB RAM)</h6>
        <br></br>
        <br></br>
        <b><p>$28587.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={redmi} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>REDMI 12 5G (Pastel Blue, 256 GB)  (8 GB RAM)</h6>
        <br></br>
        <br></br>
        <b><p>$15394.99</p></b>
      </div>
      <div class="appliance-item">
        <img src={buds} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <br/>
        <h6>Fome M10 TWS Bluetooth 5.1 Earphones 3500mAh Charging Box Wireless Headphone </h6>
        <br></br>
        
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={headphone} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Worricow Best Sound Latest With Mic With 6 Hour Backup Bluetooth Headphone Bluetooth</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={mouse} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>ZEBRONICS ZEB-TRANSFORMER-M Wired Optical Gaming Mouse  (USB 3.0, Black)</h6>
        <br></br>
        <b><p>$529.99</p></b>
      </div>
      </div>
      </section>
      
      <Footer/>
    </div>
  );
}