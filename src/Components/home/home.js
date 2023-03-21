import React from 'react';
import './home.css';
import {useState} from "react";
import Products from './sections/Products.js';
import Categories from './sections/Categories.js';
import All_Category from './sections/All_Category.js';

import NewArrivals from './sections/NewArrivals.js';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import home_img from './img/background_img.png'

import sample_logo1 from './img/sample_logo1.png'
import sample_logo2 from './img/sample_logo2.png'
import sample_logo3 from './img/sample_logo3.png'
import sample_logo4 from './img/sample_logo4.png'
import sample_logo5 from './img/sample_logo5.png'
import sample_logo6 from './img/sample_logo6.png'
import sample_logo7 from './img/sample_logo7.png'
import sample_logo8 from './img/sample_logo8.png'
import tc1 from './img/tc1.png'
import tc2 from './img/tc2.png'
import tc3 from './img/tc3.png'
import tc4 from './img/tc4.png'
import tc_title from './img/tc_title.png'
import part9_img1 from './img/part9_img1.png'
import part9_img2 from './img/part9_img2.png'
import part10_img from './img/part10_img.png'
import part11_1 from './img/part11_images/part11_1.png'
import part11_2 from './img/part11_images/part11_2.png'
import part11_3 from './img/part11_images/part11_3.png'
import part11_4 from './img/part11_images/part11_4.png'
import part11_5 from './img/part11_images/part11_5.png'
import part11_6 from './img/part11_images/part11_6.png'

import home_img2 from './img/caro_img2.jpeg'
import home_img3 from './img/caro_img3.jpeg'
import people from './img/people.png'
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

function Home() {

    

    

  return (

 <div className="home" id="home">

         <div className="part_first">
        

         <Container>
         <Row className="justify-content-center">

   



   
                                       

<Row className="custom_row">
    <Col md={6}> 
    <div className='cur_heading'><h2>Professional</h2></div>
    
   <h1>Beauty & Care</h1>
   <div className='cus_para'>
   <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
   </div>
   



      <Button className="btn1">SHOP NOW</Button> 



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
      <div className='cur_heading3'><h2>Cosmetics</h2></div>
            <div class="col-12 m-2 text-center ">
              <h3>Trending products</h3>
              <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
        
            </div>
         

           
            <All_Category />
      </Container>
 </div>
 

 <div className="part3">
      <Container>
        <Row className='text-center justify-content-center'>
        
           
          <div className='d-flex justify-content-center'>
         <div className='samp_logo'>
          <img src={sample_logo1}/>
         
          </div>
          <div className='samp_logo'>
          <img src={sample_logo2}/>
         
          </div>
          <div className='samp_logo'>
          <img src={sample_logo3}/>
         
          </div>
          <div className='samp_logo'>
          <img src={sample_logo4}/>
         
          </div>
          <div className='samp_logo'>
          <img src={sample_logo5}/>
         
          </div>
          </div>
         
    

         </Row>
        
      </Container>

 </div>

 <div className="part4">
 <div className="part4_content">
 <Container>
         <Row className="justify-content-center">

   



   
                                       

<Row className="custom_row2 align-items-center p-5">
    <Col md={4} xd={12} className="p-5"> 
    <div className='cur_heading2'><h2>Discount</h2></div>
    
   <h1>Get Your 50% Off</h1>
   
   <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
  
   



      <Button className="btn2">SHOP NOW</Button> 



    </Col>
   
</Row>

</Row> 
</Container>
    </div>

 </div>

 <div className="part5">
      <Container>
        <Row className='text-center justify-content-center'>
        
           
          <div className='d-flex justify-content-center'>
         <div className='samp_logo'>
          <img src={sample_logo6}/>
          <h4>Natural</h4>
          <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
         
          </div>
          <div className='samp_logo'>
          <img src={sample_logo7}/>
          <h4>Quality</h4>
          <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
          </div>
          <div className='samp_logo'>
          <img src={sample_logo8}/>
          <h4>Organic</h4>
          <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
          </div>
          
          </div>
         
    

         </Row>
        
      </Container>

 </div>

 <div className="part6 text-center">
      <Container>
      <div className='cur_heading3'>
        <h2>Popular collections</h2></div>
            <div class="col-12 text-center ">
              <h3>Top categories</h3>
              <p className='custom_text'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
        
            </div>
            </Container>

  <Row className='part6row'>
    

        <Col md={4} className="part6_content">
              <img className="img-fluid back_img"src={tc1}/>
              <div className='content2'>
                <button><img src={tc_title}/></button>
              </div>
         </Col>
        <Col md={4} className="part6_content"> 
        <img className="img-fluid back_img"src={tc2}/>
              <div className='content2'>
                <button><img src={tc_title}/></button>
              </div></Col>
        <Col md={4} className="part6_content">
           <img className="img-fluid back_img"src={tc3}/>
              <div className='content2'>
                <button><img src={tc_title}/></button>
              </div></Col>

    
  </Row>

  

 </div>

 <div className="part7 text-left">
      
      
  <Row className=' align-items-center'>
    

        <Col md={6} className="">
              <img className="img-fluid "src={tc4}/>
            
         </Col>
        <Col md={6} className=""> 
        <div className='part7_2_description'>
        <div className='cur_heading3'><h2>Check This Out</h2></div>
            <div class="col-12 text-left ">
              <h3>New Collection For Delicate Skin</h3>
              <p className='primary_ptext'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
              <p className='secondary_ptext'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.</p>
            </div>
            <Button className="btn1">SHOP NOW</Button> 
            </div>
            </Col>
       

    
  </Row>

  <Row className=' part7_2 align-items-center'>
    

    
  <Col md={6} className=" "> 
        <div className='part7_2_description'>

           <div className='cur_heading3'><h2>About Us</h2>
           </div>
            <div class="col-12 text-left ">
              <h3>Who we are</h3>
              <p className='primary_ptext'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
              <p className='secondary_ptext'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.</p>
            </div>
           

        </div>
       
             
        </Col>
        <Col md={6} className="">
              <img className="img-fluid "src={tc4}/>
            
         </Col>
   


</Row>
 </div>



 <div className="part8 text-center">
      <Container>
      <div className='cur_heading3'><h2>Cosmetics</h2></div>
            <div class="col-12 m-2 text-center ">
              <h3 className='custom_heading'>New Arrivals</h3>
              <p className="custom_text">Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
        
            </div>
         

           
            <NewArrivals />
      </Container>
 </div>


 <div className="part9 text-center">
      <Container>
      <div className='cur_heading3'><h2>Our Blog</h2></div>
            <div class="col-12 m-2 text-center ">
              <h3 className='custom_heading'>The Latest News At BeShop</h3>
              <p className="custom_text">Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
        
            </div>

            <Row className='part9_row justify-content-center align-items-center'>
    

    
                <Col md={6} className=" "> 
                   <Card className=''> 
                   <img className="img-fluid "src={part9_img1}/>
                   <Card.Body>
                   <Card.Title  className="text-left">Best multi-step skin care treatment</Card.Title>
                   <Card.Text>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.</Card.Text>
                  
                   <Button className="btn3">READ MORE<FontAwesomeIcon icon={faArrowRightLong} size="lg"></FontAwesomeIcon></Button> 
           
                   </Card.Body>
                   </Card>
                
                          
                </Col>
                <Col md={6} className=" "> 
                   <Card className=''> 
                   <img className="img-fluid "src={part9_img2}/>
                   <Card.Body>
                   <Card.Title  className="text-left">Best multi-step skin care treatment</Card.Title>
                   <Card.Text>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.</Card.Text>
                  
                   <Button className="btn3">READ MORE<FontAwesomeIcon icon={faArrowRightLong} size="lg"></FontAwesomeIcon></Button> 

                   </Card.Body>
                   </Card>
                
                          
                </Col>
   <Row> 
    <Col className='p-5'><Button className="btn1">READ BLOG</Button> 
    </Col>
    </Row>


    <Row> 
   
    </Row>
 

  </Row>
         

           
         
      </Container>
 </div>


 <div className="part10">
  <Container>
    <Row className='part10row justify-content-center'>

      <Col xd={8}>
        <div className='part10_bg d-flex'>
          <img className="img-fluid "src={part10_img}/>
          <div className="part10_desc">
            <h2>Stay In Touch</h2>
            <p>Nourish your skin with toxin-free cosmetic  roducts. </p>

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
        </div>
     
      </Col>

    </Row>
  </Container>
 </div>



 <div className="part11">
 
  

   <div className = 'd-flex'>

    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_1}/></div>
    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_2}/></div>
    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_3}/></div>
    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_4}/></div>
    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_5}/></div>
    <div className = ' part11_2_img'> <img className="img-fluid "src={part11_6}/></div>
   
   </div>
   

 </div>




</div>
  	

  );

  
}


export default Home;