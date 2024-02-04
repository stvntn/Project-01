import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

import logos2 from '../assets/Logos/logos2.svg'
import img2 from '../assets/img/img2.svg'
import member from '../assets/Icons/member.svg'
import scanner from '../assets/Icons/scanner.svg'
import wifi from '../assets/Icons/wifi.svg'
import play from '../assets/Icons/play.svg'

export default function SectionTwo() {

    return (

        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',                
                    flexDirection: 'column',
                    px: '260px',
                    mt: '30px'
                }}
            >
                <Typography                
                    align="center"                
                    color="primary"
                    fontSize={'13px'}
                >
                    Meet our Clients
                </Typography>

                <Typography                
                    align="center"
                    fontSize={'20px'}
                    sx={{
                        mt: '10px',
                        mb: '60px',
                        mx: '100px'
                    }}                
                >
                    This guys are using our service and they're
                    more than happier ever.
                </Typography>

                <img src= {logos2} 
                    width= '600px'
                    align= 'center'
                />
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',                
                    padding: '100px',
                    position: 'relative'
                }}
            >

                <Box>
                    <Typography
                        fontSize= '37px'                    
                        marginRight={ '50px' }                               
                    >
                        Some good place to 
                        where can build your 
                        startup business
                    </Typography>

                    <Typography
                        fontSize= '16px'
                        marginRight={ '50px' }
                        marginTop={ '20px' } 
                    >
                        Coworking offers beautifully crafted workspaces where 
                        people can create, connect, and grow their businesses at 
                        prime locations in multiple cities.            
                    </Typography>


                    <Box
                        sx={{ 
                            mt: '50px',
                            display: 'flex',
                            JustifyContent: 'spaceBetween'
                        }}   
                    >
                        <Card bgcolor="transparent" elevation={0} sx= {{width: '30%'}} display= 'flex'>
                            <img src= {scanner} width= '25px' />
                            <Typography>
                                1000 ft2
                            </Typography>
                            <Typography
                                fontSize= '12px'                        
                            >
                                you will get 1000ft square
                                space facility here.
                            </Typography>
                        </Card>
                        <Card bgcolor="transparent" elevation={0} sx= {{width: '30%', mx: '20px'}} display= 'flex'>
                            <img src= {member} width= '25px' />
                            <Typography>
                                80 Members
                            </Typography>
                            <Typography
                                fontSize= '12px'                        
                            >
                                you will get advantage to 
                                live 80+ member here.
                            </Typography>
                        </Card>
                        <Card bgcolor="transparent" elevation={0} sx= {{width: '30%'}} display= 'flex'>
                            <img src= {wifi} width= '25px' />
                            <Typography>
                                100 mbps
                            </Typography>
                            <Typography
                                fontSize= '12px'                        
                            >
                                Internet speed is much better thjan others.
                            </Typography>
                        </Card>
                    </Box>

                </Box>

                <Box>
                    <img src= {img2} 
                        width= '450px'
                        height= '450px'
                    />
                </Box>

                    <Card 
                    sx={{
                            position: 'absolute',
                            top: '25%',
                            left: '67%',
                            transform: 'translate(-100%, -50%)',
                            width:"215px", 
                            height:"80px",
                            bgcolor: 'primary.main',
                            display: 'flex',
                            padding: '10px'
                        }}>
                        <Box 
                            display="flex" 
                            alignItems="center"
                        >
                            <img src= {play} width= '40px' style={{ marginRight: '16px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>                               
                            <Typography                                 
                                fontSize= '13px'
                                color= 'white'
                            >
                                Kin Coworking Space
                            </Typography>
                            <Typography
                                fontSize= '11px'
                                variant="inherit"
                                style={{color: '#FFFFFF60'}}
                            >
                                442 Broadway, New York
                            </Typography>
                        </Box>                        
                        </Box>                    
                    </Card>
            </Box>
        </>
    )
}