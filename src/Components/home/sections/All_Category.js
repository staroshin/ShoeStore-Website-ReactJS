import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Container from 'react-bootstrap/Container';
import './Slider.css';
import './All_Category.css';
import Flowers from './Flowers.js'
import Burger from './Book.js'


function All_Category() {
 
  return (
    <div className='part_catg'>
    <Container>
    
    <Tabs
      defaultActiveKey="flowers"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      
      <Tab eventKey="flowers" title="Flowers">
      <Flowers/>



                    
      
      </Tab>
      <Tab eventKey="book" title="Books">
          <Burger/>
      </Tab>
    </Tabs>

    </Container>
    </div>
  );
}

export default All_Category;