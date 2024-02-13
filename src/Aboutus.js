import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    
       <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{marginLeft:"60%",height:"50px"}}>
          <Navbar.Brand href="#home"><h5>Home</h5></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><h5>About Us</h5></Nav.Link>
            <Nav.Link href="#features"><h5>Services & Product</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Jobs</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Contact</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      )
      }