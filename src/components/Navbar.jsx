import { AppBar, Box, Button, Toolbar } from '@mui/material';
import logo from '../assets/img/logo.svg'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
    
  export default function Navbar() {
      
    return (
      <>
        <AppBar 
          position="static" 
          color="transparent"
          elevation={0}
        > 
          <Toolbar 
            align= 'center'
          >

          <img src={logo}  width= '130px'/>
        
          <Box
            flexGrow={1}
            position={'center'}
            sx={{              
              gap: 2
            }}
          >
            <Button  
              color="inherit"
              fontSize= '16px'
              align="center"
              style={{
                textTransform: 'capitalize'
              }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              fontSize= '16px'
              align="center"
              endIcon={<ArrowDropDownIcon />}
              style={{
                textTransform: 'capitalize'
              }}
            >
              Advertise
            </Button>

            <Button
              color="inherit"
              fontSize= '16px'
              align="center"
              endIcon={<ArrowDropDownIcon />}
              style={{
                textTransform: 'capitalize'
              }}
            >
              Supports
            </Button>

            <Button  
              color="inherit"
              fontSize= '16px'
              align="center"
              style={{
                textTransform: 'capitalize'
              }}
            >
              Contact
            </Button>

            <Button  
              color="inherit"
              fontSize= '16px'
              align="center"
              style={{                
                textTransform: 'capitalize'
              }}
            >
              About us
            </Button>
          </Box>

            <Button
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
  