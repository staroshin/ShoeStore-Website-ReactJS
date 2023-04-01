import React from 'react';
import './home.css';
import {useState} from "react";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';





import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import All_Category from './sections/All_Category.js'

function Home() {

    

    

  return (

 <div className="home" id="home">

         <div className="part_first" id="part1">
        

         <Container>
         <Row className="justify-content-center">

   



   
                                       

<Row className="custom_row">
    <Col md={6}> 
    
    
   <h2>Find Your Desired</h2>
   <h1>Shoes Here</h1>
   <div className='cus_para'>
   <p>This is where you can find your desired shoes.</p>
   </div>
   



      <Button className="btn1">Explore</Button> 



    </Col>
    <Col md={6} className="custom_img_place">


     
     
  


     



 </Col>
</Row>

















</Row> 
</Container>
                                                
        </div>

   
    
  <div className="part2 text-center">
      <Container>
    
            <div class="col-12 m-2 text-center ">
            <h3 className='custom_heading'>Categories</h3>
             < All_Category />
        
            </div>
         

           
            {/* <Makeup /> */}
      </Container>
 </div>
 

 
 

 

 

 

 <div className="part9 text-center">
      <Container>
     
            <div class="col-12 m-2 text-center ">
              <h3 className='custom_heading'>Our Responsibilities</h3>
              <p className="custom_text">Text Here</p>
        
            </div>

          

           
         
      </Container>
 </div>


 <div className="part10">
  <Container>
    <Row className='part10row justify-content-center text-center'>

      <Col xd={8} md={6}>
      <div className="part10_desc">
            <h2>Stay In Touch</h2>
            <p>Text Here</p>

            <div className='d-flex'>
            <InputGroup className="">
       
                <Form.Control
                      placeholder="Enter your email"
                      aria-label="Username"
            
                />
            </InputGroup>
            <Button className="btn1">SUBSCRIBE</Button>
            </div>
            
             
          </div>
      </Col>

    </Row>
  </Container>
 </div>








</div>
  	

  );

  
}


export default Home;