import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
    
  export default function Navbar() {
      
    return (
      <>
        <AppBar position="absolute" color="inherit"> 
          <Toolbar>
            <Typography 
              align="right"
              variant="h6" 
              
            >
              StartupLanding
            </Typography>
        
          <Box>
            <Button  
              color="inherit"
              size="small"       
              variant="text"
            >
              Home
            </Button>

            <Button
              color="inherit"
              size="small"              
              variant="text"
              aria-label="Roboto"
              endIcon={<ArrowDropDownIcon />}
            >
              Advertise
            </Button>

            <Button
              color="inherit"
              size="small"              
              variant="text"
              endIcon={<ArrowDropDownIcon />}
            >
              Supports
            </Button>

            <Button  
              color="inherit"
              size="small"       
              variant="text"
            >
              Contact
            </Button>

            <Button  
              color="inherit"
              size="small"       
              variant="text"
            >
              About us
            </Button>
          </Box>
          </Toolbar>                
        </AppBar>
      </>
    );
  }
  