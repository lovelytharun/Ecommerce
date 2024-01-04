 /*//import './App.css';
import Login from './E-Commerce/Login';
//import Signin from './E-Commerce/Signin';

//import Home from "./E-Commerce/Home";


function App() {
  return (
    <div >
    
    <Login/>
    </div>
  );
}

export default App;

*/

/*import React from 'react'
import LoginForm from './E-Commerce/LoginForm/LoginForm'
//import Signin from './E-Commerce/Signin'

export default function App() {
  return (
    <div>
      
      <LoginForm/>
    </div>
  )
}*/

/*import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
// import Home from "./Home";
// import LoginForm from "./LoginForm";
// import Signin from "./Signin";
import Home from "./E-Commerce/Home";
import LoginForm from "./E-Commerce/LoginForm/LoginForm";
import Signin from "./E-Commerce/Signin";
import Navigation from "./E-Commerce/Navigation";
function App() {
  return (
    <div>
    <Navigation/>
    <Router>
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signin" component={Signin} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;*/


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './E-Commerce/Home';
import LoginForm from './E-Commerce/LoginForm/LoginForm';
import Signin from './E-Commerce/Signin';
import Contact from './E-Commerce/Contact';
//import Cart from './E-Commerce/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

