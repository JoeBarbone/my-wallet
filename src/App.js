import React from "react";
// import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Add from "./components/Add";
import Update from "./components/Update";


function App() {

  return (

    <div>

      <main>
              
        <Router>

          <Nav />  
          <Routes>
              
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/addCard" element={<Add />} />
                <Route path="/update" element={<Update />} />
                  
          </Routes>
          <Footer></Footer>
        
        </Router>
        
      </main>

    </div>

  );

}

export default App;
