import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from '@mui/material';
import logo from '../assets/img/logo.svg'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import NavListDrawer from './NavListDrawer';
import { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import WarningIcon from '@mui/icons-material/Warning';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactsIcon from '@mui/icons-material/Contacts';
import GroupsIcon from '@mui/icons-material/Groups';

  const navLinks = [
    {
      tittle: "Home", 
      path: "#home",
      icon: <HomeIcon />      
    },
    {
      tittle: "Advertise", 
      path: "#advertise",
      icon: <WarningIcon />,
      // icon: <ArrowDropDownIcon />,
    },
    {
      tittle: "Supports",
      path: "#supports",
      icon: <SupportAgentIcon />,
      // icon: <ArrowDropDownIcon />,
    },
    {
      tittle: "Contact",
      path: "#contact",
      icon: <ContactsIcon />
    },
    {
      tittle: "About us",
      path: "#about us",
      icon: <GroupsIcon />
    },
  ]
    
  export default function Navbar() {

      const [open, setOpen] = useState(false)
      
    return (
      <>
        <Drawer 
          open={open} 
          anchor='left'
          onClose={() => setOpen(false)}          
        > 
          <NavListDrawer navLinks={navLinks}/> 
        </Drawer>

        <AppBar 
          
          className='app-bar'
        > 
          <Toolbar>
          
          <IconButton 
            size='large'
            onClick={() => setOpen(true)}
            className='boton-drawer'
          >  
            <MenuIcon /> 
          </IconButton>

          <img src={logo} className='logo-main'/>
        
          <div className='botones-encabezado'>
            {
              navLinks.map((item) => (
                <Button
                  key={item.tittle}
                  component='a'
                  href={item.path}
                  color='secondary'
                  fontSize= '20px'
                  align="center"
                  style={{
                    textTransform: 'none',
                    fontWeight: '500'
                  }}
                >
                  {item.tittle}
                </Button>
              ))
            }
          </div>

            <Button className='boton-join'
              variant="contained"            
              fontSize= '16px'
              style={{                
                textTransform: 'none'
              }}            
            >
              Join us now
            </Button>
          </Toolbar>                
        </AppBar>
      </>
    );
  }
  