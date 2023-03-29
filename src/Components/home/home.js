import React from 'react';
import './home.css';
import {useState} from "react";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import home_img from './img/background_img.png'


import part9_img1 from './img/part9_img1.png'
import part9_img2 from './img/part9_img2.png'

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
import Makeup from './sections/PopularPets.js'

function Home() {

    

    

  return (

 <div className="home" id="home">

         <div className="part_first">
        

         <Container>
         <Row className="justify-content-center">

   



   
                                       

<Row className="custom_row">
    <Col md={6}> 
    
    
   <h2>Find Your New</h2>
   <h1>Best Friend and Companion</h1>
   <div className='cus_para'>
   <p>This is where you can find your lovable desired pet.</p>
   </div>
   



      <Button className="btn1">Explore</Button> 



    </Col>
    <Col md={6} className="custom_img_place">


     
       <img src={home_img} />
  


     



 </Col>
</Row>

















</Row> 
</Container>
                                                
        </div>

   
    
  <div className="part2 text-center">
      <Container>
    
            <div class="col-12 m-2 text-center ">
              <h3>Popular Pets</h3>
              <p>This is where you can find your lovable desired pet.</p>
        
            </div>
         

           
            <Makeup />
      </Container>
 </div>
 

 
 

 

 

 

 <div className="part9 text-center">
      <Container>
     
            <div class="col-12 m-2 text-center ">
              <h3 className='custom_heading'>Our Responsibilities</h3>
              <p className="custom_text">This is where you can find your lovable desired pet.</p>
        
            </div>

            <Row className='part9_row justify-content-center align-items-center'>
    

    
                <Col md={6} className=" "> 
                   <Card className=''> 
                   <img className="img-fluid "src={part9_img1}/>
                   <Card.Body>
                   <Card.Title  className="text-left">About Our Pet Home</Card.Title>
                   <Card.Text>This is where you can find your lovable desired pet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Text>
                  
                   <Button className="btn3">READ MORE<FontAwesomeIcon icon={faArrowRightLong} size="lg"></FontAwesomeIcon></Button> 
           
                   </Card.Body>
                   </Card>
                
                          
                </Col>
                <Col md={6} className=" "> 
                   <Card className=''> 
                   <img className="img-fluid "src={part9_img2}/>
                   <Card.Body>
                   <Card.Title  className="text-left">About Our Pet Food & Diet Chart</Card.Title>
                   <Card.Text>This is where you can find your lovable desired pet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Card.Text>
                  
                   <Button className="btn3">READ MORE<FontAwesomeIcon icon={faArrowRightLong} size="lg"></FontAwesomeIcon></Button> 

                   </Card.Body>
                   </Card>
                
                          
                </Col>
   


    <Row> 
   
    </Row>
 

  </Row>
         

           
         
      </Container>
 </div>


 <div className="part10">
  <Container>
    <Row className='part10row justify-content-center text-center'>

      <Col xd={8} md={6}>
      <div className="part10_desc">
            <h2>Stay In Touch</h2>
            <p>This is where you can find your lovable desired pet.</p>

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