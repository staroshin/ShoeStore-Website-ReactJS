import React from 'react';
import './home.css';
import {useState} from "react";
import Products from './sections/Products.js';

import Categories from './sections/Categories.js';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import home_img from './img/background_img.png'
import home_img2 from './img/caro_img2.jpeg'
import home_img3 from './img/caro_img3.jpeg'
import people from './img/people.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';





function Home() {

    

    

  return (

 <div className="home" id="home">

         <div className="part_first">
        


              <Row className="justify-content-center">

                <Carousel>
                                                    <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={home_img}
                                                        alt="First slide"
                                                      />
                                                      <div class="overlay"></div>
                                                      <Carousel.Caption>
                                                        <h3>Send Gifts to Loved Ones</h3>
                                                        <p>Here you can find best gifts for your loved ones on this special occasion</p>
                                                      </Carousel.Caption>
                                                    </Carousel.Item>



                                                    <Carousel.Item>
                                                      <img
                                                        className="d-block w-100"
                                                        src={home_img2}
                                                        alt="Secont slide"
                                                      />
                                                        <div class="overlay"></div>                                   
                                                        <Carousel.Caption>
                                                          <h3>Send Gifts to Loved Ones</h3>
                                                          <p>Here you can find best gifts for your loved ones on this special occasion</p>
                                                        </Carousel.Caption>
                                                      </Carousel.Item>



                                                      <Carousel.Item>
                                                      <img
                                                        className="d-block w-100"
                                                        src={home_img3}
                                                        alt="Third slide"
                                                      />
                                                        <div class="overlay"> </div>
                                                        <Carousel.Caption>
                                                          <h3>Send Gifts to Loved Ones</h3>
                                                          <p>Here you can find best gifts for your loved ones on this special occasion</p>
                                                        </Carousel.Caption>
                                                      </Carousel.Item>

                                                    
                </Carousel>

              </Row> 
                                                
        </div>

   
    
  <div className="part2 p-5">
      <Container>
            <div class="col-12 m-3 text-center "><h3>Popular Categories</h3></div>       
            <Categories />
      </Container>
 </div>
 

 <div className="part3">
      <Container>
         <div class="col-12 m-3 text-center"><h3>Recommended Gift Items</h3></div>
        <Products />
      </Container>

 </div>

 <div className="part4">
    <Container>
  
     <div class="col-12 text-center p-5"> <h3>What Our Customers Say About Us</h3> </div>

     <Row className="justify-content-center">
                  <Col md={12}>
                    <Row className="justify-content-center align-items-center">
                          <Col xs={12} md={5}>
                                  <img className="photo2 img-fluid" src={people} />     
                          </Col>
                          <Col xs={12} md={6} >
                              <Card>
                                <Card.Body className="opinion">
                                    <h4>Why shop from Giftown?</h4>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies nam dui mattis placerat fusce gravida diam fermentum. Sit sodales adipiscing rhoncus cras quam vel nam. 
                                              Curabitur pellentesque vitae amet, massa venenatis neque, netus nunc. Sapien vitae dolor quis quam neque facilisi sagittis, malesuada fermentum.
                                          </p>
                                </Card.Body>
                              </Card>
                          </Col>
                      </Row>
                  </Col>
      </Row>
        


    </Container>

 </div>




</div>
  	

  );

  
}


export default Home;