import { Button, CardContent, Divider, TextField  } from "@mui/material";

import img1 from '../assets/SectionFive/img1.svg';
import card1 from '../assets/SectionFive/card1.svg';
import card2 from '../assets/SectionFive/card2.svg';
import card3 from '../assets/SectionFive/card3.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextsmsIcon from '@mui/icons-material/Textsms';
import logo from '../assets/SectionFive/logo.svg'

export default function SectionFive() {
    
    return (
        <>
            <div className="primer-div">
                <div>
                    <img src={img1} className="img1"/>
                </div>
                <div className="segundo-div">
                    <p className="primer-p">
                        We have more than thousand of worldwide happy customer.
                    </p>
                    <p className="segundo-p">
                        Coworking offers beautifully crafted workspaces where 
                        people can create, connect, and grow their businesses at 
                        prime locations in multiple cities.
                    </p>
                    <Button endIcon={<ChevronRightIcon />} sx={{fontWeight:'600'}} style={{textTransform:'capitalize'}}>
                        Learn more
                    </Button>
                </div>
            </div>

            <div>
                <div className="div-blogpost">
                    <p className="tercer-p">
                        Blog Post
                    </p>
                    <p className="cuarto-p">
                        Popular blog post we update everyday
                    </p>
                </div>
                <div className="div-card">
                    <card className='card1-sectionFive'>
                        <img src= {card1} width= '90%'/>
                        <CardContent>
                            <p>
                                How to work with prototype design with adobe xd featuring tools
                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                22 Comments
                            </Button>
                        </CardContent>
                    </card>

                    <card className='card1-sectionFive'>
                        <img src= {card2} width= '90%'/>
                        <CardContent>
                            <p>
                                Create multiple artboard by using figma prototyping development                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                15 Comments
                            </Button>
                        </CardContent>
                    </card>

                    <card className='card1-sectionFive'>
                        <img src= {card3} width= '90%'/>
                        <CardContent>
                            <p>
                                Convert your web layout theming easily with sketch zeplin extension                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                18 Comments
                            </Button>
                        </CardContent>
                    </card>
                </div>
            </div>

            <div className="dividivi">
                <div>
                    <div className="dividivi-p">
                        <p className="p-end-1">
                            Subscribe to get best offers.
                        </p>
                        <p className="p-end-2">
                            By subscribing with your mail, you will agree with terms
                        </p>
                    </div>
                
                    <div className="dividivi-2">
                        <TextField
                            variant="filled" 
                            label="Enter your email"                             
                            className="texfield"
                            color="secondary"
                            sx={{
                                "& .MuiFormLabel-root": {color:"white", fontSize:"14px"},
                                bgcolor:'rgba(255, 255, 255, 0.1)',
                                input: { color: 'white' }                            
                            }}
                        />
                        <Button className="boton-end">
                            Subscribe us
                        </Button>
                    </div>
                </div>
                <div >
                    <Divider className="dividivider" />
                </div>
                <div className="dividivi-3">   
                    <div className="dividivi-4">            
                        <img src= {logo} className="logo"/>
                        
                        <p className="p-end-3">
                            Copyright by 2019 YourName Inc
                        </p>                    
                    </div>

                    <div>
                        <Button className="boton-end-2">
                            Home
                        </Button>
                        <Button className="boton-end-2">
                            Adversite
                        </Button>
                        <Button className="boton-end-2">
                            Supports
                        </Button>
                        <Button className="boton-end-2">
                            Marketing
                        </Button>
                        <Button className="boton-end-2">
                            FAQ
                        </Button>
                    </div>
                </div>                
            </div>
        </>
    )}