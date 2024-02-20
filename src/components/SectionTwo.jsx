import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

import UBER from '../assets/Logos/UBER.png'
import Google from '../assets/Logos/Google.png'
import PayPal from '../assets/Logos/PayPal.png'
import Microsoft from '../assets/Logos/Microsoft.png'
import dribbbel from '../assets/Logos/dribbbel.png'
import img2 from '../assets/img/img2.svg'
import member from '../assets/Icons/member.svg'
import scanner from '../assets/Icons/scanner.svg'
import wifi from '../assets/Icons/wifi.svg'
import play from '../assets/Icons/play.svg'

export default function SectionTwo() {

    const smallCards = [
        {
            title: '1000 ft2',
            subTitle: 'you will get 1000ft square space facility here.',
            icon: scanner
        },
        {
            title: '80 Members',
            subTitle: 'you will get advantage to live 80+ member here.',
            icon: member
        },
        {
            title: '100 mbps',
            subTitle: 'Internet speed is much better thjan others.',
            icon: wifi
        },
    ] 

    return (

        <>
            <Box className='box-section2'>
                <Typography  
                    className="parrafo1"
                    color="primary"
                >
                    Meet our Clients
                </Typography>

                <p className="parrafo2">
                    This guys are using our service and they&apos;re
                    more than happier ever.
                </p>
                <div className="div-logos">
                    <img src= {UBER}
                        
                    />

                    <img src= {Google}
                        
                    />

                    <img src= {PayPal}
                        
                    />

                    <img src= {Microsoft}
                        
                    />

                    <img src= {dribbbel}
                        
                     />
                </div>
            </Box>
            
            <Box
                className="box-good-place"
            >

                <Box className="box-left">
                    <Typography
                        className="title-box-left"                               
                    >
                        Some good place to 
                        where can build your 
                        startup business
                    </Typography>

                    <Typography
                        className="sub-title-box-left"  
                    >
                        Coworking offers beautifully crafted workspaces where 
                        people can create, connect, and grow their businesses at 
                        prime locations in multiple cities.            
                    </Typography>


                    <Box
                        sx={{ 
                            mt: '50px',
                            display: 'flex',
                            JustifyContent: 'spaceBetween',
                            width: '100%',
                            position: 'relative'
                        }}   
                    >
                        { smallCards.map((card, index) => (
                           <Card 
                            key={card.title} 
                            bgcolor="transparent" 
                            elevation={0} 
                            display='flex' 
                            className={ `card-small ${index === 1 ? 'second-card-small' : ''}`}>
                                <img src= {card.icon} width= '25px' />
                                <Typography className="title-card-small">
                                    { card.title }
                                </Typography>
                                <Typography  
                                    className="sub-title-card-small"                     
                                >
                                    { card.subTitle }
                                </Typography>
                            </Card>
                        ))}
                    </Box>

                </Box>

                <Box className="box-right">
                    <img src= {img2} className="img-side-box-right" />
                    <Card 
                        className="floating-purple-card"                    
                        sx={{
                            bgcolor: 'primary.main',
                        }}
                        >
                        <Box 
                            display="flex" 
                            alignItems="center"
                        >
                            <img src= {play} className="img-play" />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>                               
                            <Typography                                 
                                color= 'white'
                                className="title-cpurple"
                            >
                                Kin Coworking Space
                            </Typography>
                            <Typography
                                variant="inherit"
                                className="sub-title-cpurple"
                                style={{color: '#FFFFFF60'}}
                            >
                                442 Broadway, New York
                            </Typography>
                        </Box>                        
                        </Box>                    
                    </Card>
                </Box>
            </Box>
        </>
    )
}