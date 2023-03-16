 
import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Slider.css';
import './catg.css';




function Categories() {

  return (
    
       <>
     
    <Container>



 
            <Row className="p-4">

                   <Col md="3">
                     <Col id="col_custom">
                     <div id="col_custom1" className="brad">
                           <div class=" cont d-flex flex-column align-items-center justify-content-end">
                           <div class=" cont_title d-flex align-items-center justify-content-center">
                           <Link to="/flowers" ><h4>Flower</h4></Link>
                                                  
                           </div>                          
                           </div>
                     </div>
                     </Col>
                     </Col>



                     <Col md="3">
                     <Col id="col_custom">
                     <div id="col_custom2" className="brad">
                           <div class=" cont d-flex flex-column align-items-center justify-content-end">
                           <div class=" cont_title d-flex align-items-center justify-content-center">
                           <h4>Chocolate</h4>                          
                           </div>                          
                           </div>
                     </div>
                     </Col>
                     </Col>


                     <Col md="3">
                     <Col id="col_custom">
                     <div id="col_custom3" className="brad">
                           <div class=" cont d-flex flex-column align-items-center justify-content-end">
                           <div class=" cont_title d-flex align-items-center justify-content-center">
                           <h4>Candle</h4>                          
                           </div>                          
                           </div>
                     </div>
                     </Col>
                     </Col>


                     <Col md="3">
                     <Col id="col_custom">
                     <div id="col_custom4" className="brad">
                           <div class=" cont d-flex flex-column align-items-center justify-content-end">
                           <div class=" cont_title d-flex align-items-center justify-content-center">
                           <h4>Perfume</h4>                          
                           </div>                          
                           </div>
                     </div>
                     </Col>
                     </Col>
  
                    </Row>






                    <Row className="p-4">

                                 <Col md="3">
                                 <Col id="col_custom">
                                 <div id="col_custom5" className="brad">
                                       <div class=" cont d-flex flex-column align-items-center justify-content-end">
                                       <div class=" cont_title d-flex align-items-center justify-content-center">
                                       <h4>Teddy</h4>                          
                                       </div>                          
                                       </div>
                                 </div>
                                 </Col>
                                 </Col>



                                 <Col md="3">
                                 <Col id="col_custom">
                                 <div id="col_custom6" className="brad">
                                       <div class=" cont d-flex flex-column align-items-center justify-content-end">
                                       <div class=" cont_title d-flex align-items-center justify-content-center">
                                       <h4>Mug</h4>                          
                                       </div>                          
                                       </div>
                                 </div>
                                 </Col>
                                 </Col>


                                 <Col md="3">
                                 <Col id="col_custom">
                                 <div id="col_custom7" className="brad">
                                       <div class=" cont d-flex flex-column align-items-center justify-content-end">
                                       <div class=" cont_title d-flex align-items-center justify-content-center">
                                       <h4>Lamp</h4>                          
                                       </div>                          
                                       </div>
                                 </div>
                                 </Col>
                                 </Col>


                                 <Col md="3">
                                 <Col id="col_custom">
                                 <div id="col_custom8" className="brad">
                                       <div class=" cont d-flex flex-column align-items-center justify-content-end">
                                       <div class=" cont_title d-flex align-items-center justify-content-center">
                                       <Link to="/book" ><h4>Book</h4></Link>                      
                                       </div>                          
                                       </div>
                                 </div>
                                 </Col>
                                 </Col>

                                 </Row>




                    




                    






 </Container>
      
     
    </>
                      );
}

export default Categories;