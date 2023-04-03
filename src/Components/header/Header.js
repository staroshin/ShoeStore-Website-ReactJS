import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

import './nav.css';



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Header(props) {
    return (
    <>

<Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={props.image} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="">
          <nav className="navbar ">
    <div className = "nav-items">


    <div className = "nav-item">
    <NavLink to ="/">Home
    </NavLink>
    </div>

    <div className = "nav-item">
    <NavLink to="/store" >Store
    </NavLink>
    </div>

    <div className = "nav-item">
    <NavLink to="/account">Account
    </NavLink>
    </div>

     <div className = "nav-item">
    <NavLink to="/contact">Contact
    </NavLink>
    </div>

     <div className = "nav-item">
    <NavLink to="/faq">FAQ
    </NavLink>
    </div>

     

  


</div>
</nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     
    </>
  );
}

export default Header;