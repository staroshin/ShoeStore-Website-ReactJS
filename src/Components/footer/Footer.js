import React from 'react';




import logo from '../../img/giftown_logo2.png'
import pm1 from '../../img/pm1.png'
import pm2 from '../../img/pm2.png'
import pm3 from '../../img/pm3.png'
import pm4 from '../../img/pm4.png'







import Image from 'react-bootstrap/Image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';









import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './footer.css';

function Footer() {
   return (

 <div className="footer">

<Container>

         <Row className="justify-content-center">
{/* Row 1 starts */}
          <Row className="mt-5 mb-5">


        <Col xs={12} md={4} className="text-center">
       
        
        <p>Find us here:</p>
           <div className="icn_items">
            
              
                <FontAwesomeIcon icon={faFacebookF} size="lg" className="m-1"  ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg"  className="m-1"></FontAwesomeIcon>
               <FontAwesomeIcon icon={faInstagram} size="lg"  className="m-1"></FontAwesomeIcon>
 
          </div>
          
          
           

        </Col>

        <Col xs={12} md={4}>
        

         <div className=" list_itm">
         
        </div>
        </Col>

        <Col className="pm_img" xs={12} md={4}>
        <p>Payment methods:</p>
           <div className=" icn_items">
           <img src={pm1} />
           <img src={pm2} />
           <img src={pm3} />
           <img src={pm4} />
              
              
 
          </div>
        </Col>

        

       


        </Row>


{/* Row 2 starts */}

        <Row className="mt-5 mb-5">


                            <Col xs={12} md={3} className="text-left">



                            <h4>About</h4>

                            <div className="mt-3 list_itm">
                              <p>Help center</p>
                              <p>Legal</p>
                              <p>Privacy policy</p>
                              <p>Status</p>


                              </div>
                             
                              

                            </Col>

                            <Col xs={12} md={3}>

                            <h4>Categories</h4>

                            <div className="mt-3 list_itm">
                              <p>Help center</p>
                              <p>Legal</p>
                              <p>Privacy policy</p>
                              <p>Status</p>


                              </div>

                            </Col>

                            <Col xs={12} md={3}>

                              <h4>Useful Links</h4>

                            <div className="mt-3 list_itm">
                              <p>Help center</p>
                              <p>Legal</p>
                              <p>Privacy policy</p>
                              <p>Status</p>


                              </div>
                            </Col>

                            <Col xs={12} md={3}>

                              <h4>Contact</h4>

                            <div className="mt-3 list_itm">
                              <p>Help center</p>
                              <p>Legal</p>
                              <p>Privacy policy</p>
                              <p>Status</p>


                              </div>
                            </Col>






</Row>
         </Row>


</Container>
</div>
    
  );
}

export default Footer;