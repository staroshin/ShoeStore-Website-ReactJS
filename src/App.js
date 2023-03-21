import React from 'react';
import './App.css';
import Home from'./Components/home/home.js';
import Header from './Components/header/Header.js'
import Welcome from './Components/Welcome.js'
import All_Category from './Components/home/sections/All_Category.js';
import Footer from './Components/footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./img/giftown_logo.png";
import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';

import Makeup from './Components/home/sections/Makeup';


function App() {
  return (

  <Router> 

        
          <Header image={image}/>
           <Routes>            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/categories" element={<All_Category />}/>
            <Route path="/flowers" element={<Makeup />}/>
              
           </Routes>



          <Footer />

          
          <Welcome name="BeautyShopStarApp"/>

  </Router> 

    

  );
}

export default App;
