import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './E-Commerce/Home';
import LoginForm from './E-Commerce/LoginForm/LoginForm';
import Signin from './E-Commerce/Signin';
import Contact from './E-Commerce/Contact';
import About from './E-Commerce/About';
//import Cart from './E-Commerce/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        {/*<Route path="/cart" element={<Cart />} />*/}
      </Routes>
    </Router>
  );
}

export default App;

