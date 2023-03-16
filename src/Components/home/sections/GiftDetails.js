import React from 'react';

import {useState} from "react";
import {useEffect} from "react";
import {useParams} from "react-router-dom";


import './GiftDetails.css';


import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardImg } from 'react-bootstrap';


function GiftDetails() {

       const [count, setCount] = useState(0);

       const[gift,setGift] = useState({});
       const params = useParams();

       useEffect(() => {

             const getGift = async () => {
              const result = await fetch(`http://localhost:3031/${params.cat}/${params.id}`);
             
             const data = await result.json();

             setGift(data);
             }

             getGift();

       },[]);
       

  return (

        <Container>


        <div> 
  

        <Row className="p-5 justify-content-center">

        
      
               <Col md="6">
                     
               <img className="img-fluid" src={gift.image} />
                        
                


                     </Col>

                      <Col md="6">

                    <Card >
                         
                        <Card.Body className="one_food_card">

                        
                          
                           
                             <Card.Title className="one_food_title"><h1>{gift.name}</h1></Card.Title>
                             
                        
                             <Card.Title> <h2>{gift.des}</h2></Card.Title>

 

                          

                             <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>

                              <div className="justify-content-end">

                              <Button onClick={() => setCount(count + 1)} className="btn2">Add to Cart({count})</Button> 
                            
                             <Button onClick={() => setCount(0)} className="btn3">Clear</Button> 
                              
                        </div>


                           
                        </Card.Body>
                      

                       
                     </Card>
                     </Col>
        </Row>
          
         

 </div>


 </Container>


 
    
   

  );

  
}


export default GiftDetails;