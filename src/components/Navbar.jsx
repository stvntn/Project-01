import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

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
            sx={{
              
              mt: '10px',
              ml: '40px',
              mr: '40px'
            }}
          >
            <Typography               
              fontSize= '20px'
              fontWeight= '700'
              lineHeight= '24px'                                                     
            >
              StartupLanding
            </Typography>
        
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
              lineHeight= '33px' 
              align="center"
            >
              Home
            </Button>

            <Button
              color="inherit"
              fontSize= '16px'              
              lineHeight= '33px' 
              align="center"
              endIcon={<ArrowDropDownIcon />}
            >
              Advertise
            </Button>

            <Button
              color="inherit"
              fontSize= '16px'              
              lineHeight= '33px' 
              align="center"
              endIcon={<ArrowDropDownIcon />}
            >
              Supports
            </Button>

            <Button  
              color="inherit"
              fontSize= '16px'              
              lineHeight= '33px' 
              align="center"
            >
              Contact
            </Button>

            <Button  
              color="inherit"
              fontSize= '16px'              
              lineHeight= '33px' 
              align="center"
            >
              About us
            </Button>
          </Box>

            <Button
              variant="contained"            
              fontSize= '16px'              
              lineHeight= '24px'            
            >
              Join us now
            </Button>
          </Toolbar>                
        </AppBar>
      </>
    );
  }
  