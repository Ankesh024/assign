import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{height:"50px", }}>
        <Grid item xs={4} >
        <br/>
          <Item style={{backgroundColor:"lightblue", height:"50px"}}><h2>Contact</h2></Item>
          <br/>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Piyush"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Anoop"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Dhirendra"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tiwari"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sachin"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vicky"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Grid>

        <Grid item xs={8}>
        <br/>
          <Item style={{backgroundColor:"lightblue", height:"50px"}}> <h3>Welcome to Chating with  "Piyush"</h3> </Item>
<br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgrey"}}>
      <CardContent>
        Hello
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgreen",marginLeft:"250px"}}>
      <CardContent>
        Hello !!!
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgrey"}}>
      <CardContent>
        where are  you ?
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgreen",marginLeft:"250px"}}>
      <CardContent>
        I'm in Bhopal..
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgrey"}}>
      <CardContent>
        With whom did you go.
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgreen",marginLeft:"250px"}}>
      <CardContent>
         i have come with my family...
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgrey"}}>
      <CardContent>
        Great ...
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
    <br/>
          <Card style={{ width:"50%", height:"100px", backgroundColor:"lightgreen", borderColor:"black",borderStyle:"initial",marginLeft:"250px"}}>
      <CardContent>
         Text......
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </Box>
  );
}