import React from "react";
import { Container, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Login = () =>{
    return(
        
            <Container maxWidth="md" style={{display:"flex", alignItems:"center", height:"100vh", backgroundColor:"lightgray"}}>
           
 <Grid container spacing={2}>
  <Grid item md={6}>
  <Typography variant="h2" style={{color:"red", fontWeight:"800"}} gutterBottom>
  CHATTING APP
      </Typography>
    <h4 style={{fontStyle:"italic"}}>“Never blame anyone in your life. Good people give you happiness. Bad people give you experience. Worst people give you a lesson. And best people give you memories.....”</h4>
    <br/>
    <h4 style={{fontStyle:"italic"}}>Anku....🖋️🖋️🖋️</h4>
  </Grid>

  <Grid item md={6}>
  <h1 style={{marginLeft:"150px"}}>Login</h1>
  
  <TextField fullWidth id="Email" label="Email" variant="outlined" style={{marginBottom:"50px"}} />
  
  <TextField fullWidth id="Password" label="Password" variant="outlined" style={{marginBottom:"50px"}}/>
  <Button fullWidth variant="contained" href='./Chatting'>SignIn</Button>
 
  <Button fullWidth  variant="contained" style={{marginTop:"40px"}} href='./SignUp'>SignUp</Button>
 
  <p style={{marginTop:"40px", marginLeft:"50px"}} >Need to find your <b>Emailname </b> or <b>Password ? </b> </p>
  </Grid>
  </Grid>
            </Container>
        
    )
}
export default Login;