import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper"
import 'swiper/css';
import "swiper/css/free-mode"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import {useEffect} from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import './Products.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';


import im1 from '../img/cat3.png'
import im2 from '../img/cat7.png'
import im3 from '../img/cat5.png'
import im4 from '../img/cat2.png'
import im5 from '../img/cat8.png'
import im6 from '../img/cat1.png'
import rate from '../img/rate.svg'







const Products = () => {




  return (
    <div className = "Container py-4 px-4 justify-content-center">
     

        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3.5}
        spaceBetween={60}
     
        >

      
        <SwiperSlide> 
          
                        <Card className="mb-4 products">
                           
                    
                            <img className="card-image" src={im1} />
                            <Card.Body>
                              <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                              <h2>$89</h2>
                              <div className='icon_size'>
                              <img src={rate} />
                              </div>
                             

                              <div className="d-flex justify-content-center">
                              
                            
                             
                              </div>  

                          
                              </Card.Body>

                         
                       </Card>
                       
          </SwiperSlide>

          <SwiperSlide> 
          
                      
                        <Card className="mb-4 products">
                           
                    
                            <img className="card-image" src={im2} />
                            <Card.Body>
                              <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                              <h2>$89</h2>
                              <div className='icon_size'>
                              <img src={rate} />
                              </div>
                             

                              <div className="d-flex justify-content-center">
                              
                            
                             
                              </div>  

                          
                              </Card.Body>

                         
                       </Card>
                    
          </SwiperSlide>

          <SwiperSlide> 
          
                      
          <Card className="mb-4 products">
             
      
              <img className="card-image" src={im3} />
              <Card.Body>
                <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                <h2>$89</h2>
                <div className='icon_size'>
                <img src={rate} />
                </div>
               

                <div className="d-flex justify-content-center">
                
              
               
                </div>  

            
                </Card.Body>

           
         </Card>
      
</SwiperSlide>
<SwiperSlide> 
          
                      
          <Card className="mb-4 products">
             
      
              <img className="card-image" src={im4} />
              <Card.Body>
                <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                <h2>$89</h2>
                <div className='icon_size'>
                <img src={rate} />
                </div>
               

                <div className="d-flex justify-content-center">
                
              
               
                </div>  

            
                </Card.Body>

           
         </Card>
      
</SwiperSlide>

          <SwiperSlide> 
          
                      
                        <Card className="mb-4 products">
                           
                    
                            <img className="card-image" src={im5} />
                            <Card.Body>
                              <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                              <h2>$89</h2>
                              <div className='icon_size'>
                              <img src={rate} />
                              </div>
                             

                              <div className="d-flex justify-content-center">
                              
                            
                             
                              </div>  

                          
                              </Card.Body>

                         
                       </Card>
                 
          </SwiperSlide>

          <SwiperSlide> 
          
                      
                        <Card className="mb-4 products">
                           
                    
                            <img className="card-image" src={im6} />
                            <Card.Body>
                              <Card.Title>Retro Pastoralism Scented Candle</Card.Title>
                              <h2>$89</h2>
                              <div className='icon_size'>
                              <img src={rate} />
                              </div>
                             

                              <div className="d-flex justify-content-center">
                              
                            
                             
                              </div>  

                          
                              </Card.Body>

                         
                       </Card>
               
          </SwiperSlide>
           
       


        </Swiper>





    </div>
       
                      );
};

export default Products;