 
import React from 'react';

import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {useEffect} from "react";
import {Link} from "react-router-dom"
import rate from '../img/rate.svg'






function Book() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3031/book')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])




    

  return (
    
    <div className='part_catg'>
    <Container>
     


    <Row className="p-5">
 
    {items.map((item) => 
                     <Col md="4">
                      <Card className="mb-4 products">
                      <Link to={`/fooddetails/${item.cat}/${item.id}`}> <img variant="top" className="img-fluid c_img" src={item.image} /> </Link>
                        <Card.Body>
                       


                          <Link to={`/fooddetails/${item.cat}/${item.id}`}>
  
                            <Card.Title  className="slider_card">{item.name}</Card.Title>


                              </Link>

                              <h2>$15.99</h2>
                            <Card.Text>{item.des}</Card.Text>
                            <div className='icon_size'>
                              <img src={rate} />
                              </div>
                           

                             

                        </Card.Body>
                      

                       
                     </Card>
                     </Col>
                    )}
                   


                       

                  

                      
                    
                    </Row>



 </Container>
      </div>
                      );
}

export default Book;