
import "./App.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}
      style={{
        cursor: "pointer",
        fontSize: "25px",
        fontWeight: "bold",
        padding: "25px 40px",
        color:"#0095A4"
      }}
      >
      School
      </Typography>
      <Divider />
      <List>
       
          <ListItem key="home" disablePadding>
            <ListItemButton sx={{ textAlign: 'center',color:"#0095A4" }}>
            <Link className='navlink' to="/"><ListItemText primary="Home" /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem key="cervice" disablePadding>
            <ListItemButton sx={{ textAlign: 'center',color:"#0095A4" }}>
            <Link className='navlink' to="/service"><ListItemText primary="Service" /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem key="contact" disablePadding>
            <ListItemButton sx={{ textAlign: 'center',color:"#0095A4" }}>
            <Link className='navlink' to="/contact"><ListItemText primary="Contact" /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem key="about" disablePadding>
            <ListItemButton sx={{ textAlign: 'center',color:"#0095A4" }}>
            <Link className='navlink' to="/aboutus"><ListItemText primary="About us" /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem key="login" disablePadding>
            <ListItemButton sx={{ textAlign: 'center',color:"#0095A4" }}>
            <Link className='navlink' to="/login"><ListItemText primary="Login" /></Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar elevation={0} sx={{backgroundColor:"transparent"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },backgroundColor:"#0095A4",margin:"2rem 2rem" }}
          >
          <i class="fa-solid fa-bars"></i>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{
              cursor: "pointer",
              fontSize: "25px",
              fontWeight: "bold",
              padding: "25px 40px",
              color:"#0095A4"
            }}
          >
            Science
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link className='navlink' to="/">
          <Button  sx={{ color: '#0095A4' }}>
                Home
              </Button>
          </Link>
          <Link className='navlink' to="/service">
          <Button  sx={{ color: '#0095A4' }}>
                Service
              </Button>
          </Link>
          <Link className='navlink' to="/aboutus">
          <Button  sx={{ color: '#0095A4' }}>
                About
              </Button>
          </Link>
          <Link className='navlink' to="/contact">
          <Button  sx={{ color: '#0095A4' }}>
                Contact
              </Button>
          </Link>

          <Link className='navlink' to="/login">
          <Button variant="rect"   sx={{ 
          width: "max-content",
          cursor: "pointer",
          backgroundColor: "#0095A4",
          color: "white",
          height: "20px",
          borderRadius: "20px",
          padding: "19px",
          textDecoration: "none", }}>
                Login
              </Button>
          </Link>
              
          
           


          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
