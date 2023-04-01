 
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Slider.css';

import {useEffect} from "react";
import {Link} from "react-router-dom"
import rate from '../img/rate.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import car_img from '../img/slide_img1.png'
import car_img2 from '../img/slide_img2.png'
import car_img3 from '../img/slide_img3.png'
import car_img4 from '../img/slide_img4.png'

  

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';




function Catg_Women() {
  


 

  return (
    <div className='part_catg'>
    <Container>
     


    <Row className="p-5">
 
   
                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img} /> 

                    <div class="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>


                     
                     </Col>

                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img2} /> 

                    <div class="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>

                      
                      
                        </Card.Body>
                      

                       
                     </Card>
                     <Card className='text-left'>
                      <Card.Title>Brown High Heels Sandal</Card.Title>
                      <img className="rating_icon" src={rate} />
                     </Card>


                    
                     </Col>



                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img3} /> 

                    <div class="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>


                     
                     </Col>


                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div class="elms-animation">
                        <span class="one"></span>
                        <span class="two"></span>
                        <span class="three"></span>
                        <span class="four"></span>
                      </div>
                    <img variant="top" src={car_img4} /> 

                    <div class="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>


                     </Col>
                 
                   


                       

                  

                      
                    
                    </Row>



 </Container>
      </div>
      
 );
}
export default Catg_Women;