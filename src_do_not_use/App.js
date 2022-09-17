import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from "react";
// import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
// import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Add from "./components/Add";
import Update from "./components/Update";
import Navigation from "./components/Navigation";


const httpLink = createHttpLink({
  url: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {

  return (

    <ApolloProvider client={client}>

      <div>

        <main>
                
          <Router>

            {/* <Nav />   */}
            <Navigation />
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
    
    </ApolloProvider>

  );

}

export default App;
