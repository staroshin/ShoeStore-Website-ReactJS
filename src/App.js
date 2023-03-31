import React from 'react';
import './App.css';
import Home from'./Components/home/home.js';
import Header from './Components/header/Header.js'
import Welcome from './Components/Welcome.js'

import Footer from './Components/footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./img/logo.png";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';

import Makeup from './Components/home/sections/PopularPets';


function App() {
  return (

  <Router> 

        
          <Header image={image}/>
           <Routes>            
            <Route exact path="/" element={<Home/>}/>
            
            <Route path="/flowers" element={<Makeup />}/>
              
           </Routes>



          <Footer />

          
          <Welcome name="ShoeStoreWebsite"/>

  </Router> 

    

  );
}

export default App;
