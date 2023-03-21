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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <nav class="navbar ms-auto">
    <div class = "nav-items">


    <div class = "nav-item">
    <NavLink to ="/">HOME
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/categories" >PAGES
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/account">SHOP
    </NavLink>
    </div>

     <div class = "nav-item">
    <NavLink to="/notification">CATEGORIES
    </NavLink>
    </div>

     <div class = "nav-item">
    <NavLink to="/blog">BLOG
    </NavLink>
    </div>

      <div class = "nav-item">
    <NavLink to="/contact">CONTACT
    </NavLink>
    </div>



    <div class = "nav-item">
    <NavLink to="/">
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