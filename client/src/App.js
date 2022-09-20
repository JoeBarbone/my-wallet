import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Add from "./components/Add";
import Update from "./components/Update";
import Navigation from "./components/Navigation";

import PrivateRoutes from './utils/PrivateRoute';

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
                  <Route path="/about" element={<About />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route element={<PrivateRoutes />}>
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/addCard" element={<Add />} />
                    <Route path="/update/:id" element={<Update />} />
                  </Route>  
            </Routes>
            <Footer></Footer>
          
          </Router>
        
        </main>

      </div>
    
    </ApolloProvider>

  );

}

export default App;
