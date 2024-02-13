import { Container, Grid } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const SignUp = () =>{
    return(
        
        <Container maxWidth="md" style={{display:"flex", alignItems:"center", height:"100vh",width:"500px", backgroundColor:"lightgray"}}>

         <Grid>
         <h1 style={{marginLeft:"150px", fontStyle:"revert"}}>SIGN UP</h1>
         
        <TextField fullWidth name="Enter Full Name" label="Full Name" variant="outlined" style={{marginBottom:"50px"}} />
  
        <TextField fullWidth id="Mobile No." label="Mobile No." variant="outlined" style={{marginBottom:"50px"}}/>
  
        <TextField fullWidth id="City" label="City" variant="outlined" style={{marginBottom:"50px"}}/>
  
        <TextField fullWidth id="Password" label="Password" variant="outlined" style={{marginBottom:"50px"}}/>
  
        <TextField fullWidth id="Confirm Password" label="Confirm Password" variant="outlined" style={{marginBottom:"50px"}}/>
        
        <Button fullWidth variant="contained" ><Link to="/chatting" > SignUp </Link></Button>
</Grid>
            </Container>  
    )
}
export default SignUp;