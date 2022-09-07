import React from "react";
// import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {

  return (

    <div>

      <main>
              
        <Router>

          <Nav />  
          <Routes>
              
                <Route path="/" element={<Home />} />
                {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/resume" element={<Resume />} /> */}
                  
          </Routes>
          <Footer></Footer>
        
        </Router>
        
      </main>

    </div>

  );

}

export default App;
