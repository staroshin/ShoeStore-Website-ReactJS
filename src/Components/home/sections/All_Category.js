import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import './Slider.css';
import './All_Category.css';
import Catg_Women from './Catg_Women.js'



function All_Category() {
 
  return (
    <div className='part_catg'>
    <Container>
    
    <Tabs
      defaultActiveKey="women"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      

      <Tab eventKey="all" title="All">
          
      </Tab>

      <Tab eventKey="women" title="Women">
      <Catg_Women/>



                    
      
      </Tab>
      <Tab eventKey="spa" title="Men">
        
      </Tab>
      <Tab eventKey="perfume" title="Formal">
      
      </Tab>
      
     
    </Tabs>

    </Container>
    </div>
  );
}

export default All_Category;