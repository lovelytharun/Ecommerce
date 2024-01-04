import React from 'react';
import logoImage from '../assets/logoecom1.jpg'; 
import Navigation from './Navigation';
import Footer from './Footer';

export default function About() {
    return (
        <div>
        <Navigation/>
            <section id="about" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={logoImage} alt="Side Logo" className="img-fluid" style={{ width: '100%' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-2 my-5">
                            <h1 style={{ textDecoration: 'underline' }}>ABOUT US</h1>
                            <br></br>
                            <br></br>
                            <p>
                            "Welcome to [Your Company Name], your premier destination for quality products and exceptional service."
                            "At [Your Company Name], we strive to redefine your shopping experience with a curated selection of top-notch products."
                            </p>
                            <p>
                            "Our commitment lies in delivering excellence, reliability, and style in every product we offer."
                            "We believe in providing more than just products; we aim to create a seamless and enjoyable shopping journey for our customers."
                            </p>
                            <p>
                            "Established in [Year], [Your Company Name] was founded with a vision to offer a diverse range of high-quality products."
                            "Since our inception, we've dedicated ourselves to meeting the evolving needs of our customers and delivering products that exceed expectations."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
