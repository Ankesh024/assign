import { Grid } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    
       <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{marginLeft:"60%",height:"50px"}}>
          <Navbar.Brand href="#home"><h5>Home</h5></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='./Aboutus' ><h5>About Us</h5></Nav.Link>
            <Nav.Link href="#features"><h5>Services & Product</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Jobs</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Contact</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Grid container spacing={2} style={{height:"50px", marginTop:"150px",marginLeft:"100px", display:"flex" }}>
        <Grid item xs={6} >
<h1 style={{color:"darkgreen", fontStyle:"italic"}}>One Stop IT Support</h1>
<h1>Managed Service Solution</h1> 
<h5>Web APP | Technology Integration | Security Application | DevOps </h5>
<h5>Services| Cloud Computing | IOT Based Application|</h5>
</Grid>
</Grid>
<div style={{ width:"95%", height:"100px", backgroundColor:"lightgray", borderRadius:"55px", marginLeft:"50px" }} >
<Grid style={{marginTop:"350px", marginLeft:"60px" }}>
<h1 style={{marginTop:"50px"}}>We are IT solution service & software development provider in Bhopal</h1>
</Grid>
</div>

<Grid container spacing={2} style={{height:"50px", marginTop:"150px",marginLeft:"600px", display:"flex" }}>
        <Grid item xs={6} >
<h3>Not only that but we also provide security solution services, IOT based application, home automation, robotic vehicles, digital marketing, electronic project development, technology integration, AI and machine learning, CRM, etc.</h3>
        </Grid>
        </Grid>
<Grid container spacing={2} style={{height:"50px", marginTop:"350px",marginLeft:"100px", display:"flex" }}>
        <Grid item xs={6} >
<h3>Welcome to microtechnologies Bhopal. At Microtechnologies, We continuously follow the latest strategies to enhance your online business from different technologies perspectives.</h3>
        </Grid>
        </Grid>
<Grid container spacing={2} style={{height:"50px", marginTop:"350px",marginLeft:"600px", display:"flex" }}>
        <Grid item xs={6} >
<h3>You can easily find our office’s physical address in Bhopal-</h3>
<br/>
<h3>Dealing with various intricacies of security solution services, IOT based application, home automation, robotic vehicles, digital marketing, technology integration, AI and machine learning, CRM, etc. on a constant basis might be challenging. However, we’ve gained enough experience to be the leading service provider in the field.
</h3>
        </Grid>
        </Grid>


        <div className="mb-2" style={{ marginTop:"500px", marginLeft:"700px"}}>
        <Button variant="primary" size="lg">
          About
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Contact Us
        </Button>
      </div>
    </>  
  
  )
}

export default ColorSchemesExample;