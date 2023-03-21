import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from 'react-bootstrap/Container';
import './Slider.css';
import './All_Category.css';
import Makeup from './Makeup.js'



function All_Category() {
 
  return (
    <div className='part_catg'>
    <Container>
    
    <Tabs
      defaultActiveKey="flowers"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      
      <Tab eventKey="flowers" title="Make up">
      <Makeup/>



                    
      
      </Tab>
      <Tab eventKey="spa" title="SPA">
        
      </Tab>
      <Tab eventKey="perfume" title="Perfume">
      
      </Tab>
      <Tab eventKey="nails" title="Nails">
          
      </Tab>
      <Tab eventKey="sk" title="Skin Care">
        
      </Tab>
      <Tab eventKey="hc" title="Hair Care">
          
      </Tab>
    </Tabs>

    </Container>
    </div>
  );
}

export default All_Category;