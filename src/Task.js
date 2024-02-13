
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Card from 'react-bootstrap/Card';
// import { Chart } from "react-google-charts";



// const drawerWidth = 240;
// const data = [
//   [
//     "Month",
//     "Bolivia",
//     "Ecuador",
//     "Madagascar",
//     "Papua New Guinea",
//     "Rwanda",
//     "Average",
//   ],
//   ["2004/05", 165, 938, 522, 998, 450, 614.6],
//   ["2005/06", 135, 1120, 599, 1268, 288, 682],
//   ["2006/07", 157, 1167, 587, 807, 397, 623],
//   ["2007/08", 139, 1110, 615, 968, 215, 609.4],
//   ["2008/09", 136, 691, 629, 1026, 366, 569.6],
// ];

// const options = {
//   title: "Monthly Coffee Production by Country",
//   vAxis: { title: "Cups" },
//   hAxis: { title: "Month" },
//   seriesType: "bars",
//   series: { 5: { type: "line" } },
// };

// const deta = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7], // CSS-style declaration
// ];
  
// const option = {
//   title: "My Daily Activities",
//   pieHole: 0.4,
//   is3D: false,
// };


// export default function ClippedDrawer() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Clipped drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <div style={{display:"flex"}}>
        
//         {[
//         'Primary',
//         'Secondary',
//         'Success',
//         'Danger',
        
//       ].map((variant) => (
//         <Card
//           bg={variant.toLowerCase()}
//           key={variant}
//           text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//           style={{ width: '15rem', marginLeft:"25px" }}
//           className="mb-2"
//         >
//           <Card.Header>BUDGET</Card.Header>
//           <Card.Body style={{marginLeft:"20px"}}>
//             <Card.Title>{variant} Card Title </Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     <div style={{display:"flex"}}>
//     <Chart
//       chartType="ComboChart"
//       width="85%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//    <Chart
//       chartType="PieChart"
//       width="75%"
//       height="400px"
//       data={deta}
//       options={option}
//     />
//     </div>
//       </Box>
//     </Box>
//   );
// }