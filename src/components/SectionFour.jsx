import { Button, Card, CardContent, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";

import member1 from '../assets/SectionFour/member1.svg'
import member2 from '../assets/SectionFour/member2.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EastIcon from '@mui/icons-material/East';

export default function SectionFour() {

    return (
        <div className="four-section2">            
            <Typography className="typography3">
                Pricing plan
            </Typography>
            
            <Typography className="typography4">
                What deal suit you perfect
            </Typography>
            
            <div className="div-botones">
                <Button className="boton-monthly"
                    variant="contained"                   
                    style={{
                        height:'38px', 
                        marginTop:"4px", 
                        textTransform:'capitalize',                                                                      
                    }}>
                    Monthly Plan
                </Button>

                <Button variant="text" style={{ color:"white", textTransform:'capitalize'}}>
                    Annual Plan
                </Button>
            </div>

            <div className="div-four-section">
                <Card className="card1">
                    <CardContent >
                        <img src= {member1} style={{marginLeft: '15px'}}/>
                        <List className="lista">
                            <ListSubheader sx={{fontSize:'22px', color: 'white', bgcolor: 'transparent'}}>
                                Starter Pack
                            </ListSubheader>               
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Ultimate access to all course, exercises and assessments"/>
                            </ListItem>
                            <ListItem>   
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Free acess for all kind of exercise corrections with downloads."/>
                            </ListItem>
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Total assessment corrections with free download access system"/>
                            </ListItem>
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CancelIcon sx={{color:"grey"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" sx={{color: 'grey'}} primary="Unlimited download of courses on the mobile app contents"/>
                            </ListItem>                       
                        </List>
                    </CardContent>                    
                    <div className="div-price1-1">                    
                        <div className="div-price1-2">
                        <div>
                                <Typography fontSize='14px' sx={{color: "grey"}}>
                                    Starting from
                                </Typography>
                                <Typography fontSize='22px' color='white'>
                                    49.99/mo
                                </Typography>
                            </div>
                            <IconButton >
                                <EastIcon sx={{color:"white"}}/>
                            </IconButton>
                        </div>
                    </div>    
                </Card>

                <Card className="card2">
                    <CardContent className="content-card2">
                        <img src= {member2} style={{marginLeft: '15px'}}/>
                        <List className="lista2">
                            <ListSubheader sx={{fontSize:'22px', color: "black"}}>
                                Family Pack
                            </ListSubheader>         
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Ultimate access to all course, exercises and assessments"/>
                            </ListItem>
                            <ListItem>   
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Free acess for all kind of exercise corrections with downloads."/>
                            </ListItem>
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Total assessment corrections with free download access system"/>
                            </ListItem>
                            <ListItem>
                            <ListItemIcon className="list-item-icon-card">
                                <CheckCircleIcon style={{color:"rgba(63, 219, 177, 1)"}} fontSize="small"/>
                            </ListItemIcon>
                                <ListItemText className="list-item-text" primary="Unlimited download of courses on the mobile app contents"/>
                            </ListItem>                     
                        </List>                                               
                    </CardContent>
                    <div className="div-price2-1">
                        <div className="div-price2-2">   
                            <div>
                                <Typography fontSize='14px' sx={{color: "black"}}>
                                    Starting from
                                </Typography>
                                <Typography fontSize='22px' color='primary'>
                                    49.99/mo
                                </Typography>
                            </div>
                            <IconButton>
                                <EastIcon />
                            </IconButton>
                        </div>
                    </div>    
                </Card>
            </div>
        </div>      
    )
}