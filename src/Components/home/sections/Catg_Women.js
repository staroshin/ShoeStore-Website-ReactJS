 
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

                      <div className="elms-animation">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                      </div>
                    <img variant="top" src={car_img} /> 

                    <div className="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>
                     <Card className='text-left'>
                      <Card.Title>Brown High Heels Sandal</Card.Title>
                      <img className="rating_icon" src={rate} />
                      <h1 className='price_text'>$24.80</h1>
                     </Card>


                     
                     </Col>

                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div className="elms-animation">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                      </div>
                    <img variant="top" src={car_img2} /> 

                    <div className="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>

                      
                      
                        </Card.Body>
                      

                       
                     </Card>
                     <Card className='text-left'>
                      <Card.Title>Brown High Heels Sandal</Card.Title>
                      <img className="rating_icon" src={rate} />
                      <h1 className='price_text'>$24.80</h1>
                     </Card>


                    
                     </Col>



                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div className="elms-animation">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                      </div>
                    <img variant="top" src={car_img3} /> 

                    <div className="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>
                     <Card className='text-left'>
                      <Card.Title>Brown High Heels Sandal</Card.Title>
                      <img className="rating_icon" src={rate} />
                      <h1 className='price_text'>$24.80</h1>
                     </Card>


                     
                     </Col>


                     <Col md="3">
                      <Card className="mb-4 products">
                      <Card.Body>

                      <div className="elms-animation">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                        <span className="four"></span>
                      </div>
                    <img variant="top" src={car_img4} /> 

                    <div className="content">
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="m-1"  ></FontAwesomeIcon></button>
                      </div>
                      
                        </Card.Body>
                      

                       
                     </Card>
                     <Card className='text-left'>
                      <Card.Title>Brown High Heels Sandal</Card.Title>
                      <img className="rating_icon" src={rate} />
                      <h1 className='price_text'>$24.80</h1>
                     </Card>


                     </Col>
                 
                   


                       

                  

                      
                    
                    </Row>



 </Container>
      </div>
      
 );
}
export default Catg_Women;