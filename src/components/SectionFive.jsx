import { Button, Card, CardContent  } from "@mui/material";

import img1 from '../assets/SectionFive/img1.svg';
import card1 from '../assets/SectionFive/card1.svg';
import card2 from '../assets/SectionFive/card2.svg';
import card3 from '../assets/SectionFive/card3.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextsmsIcon from '@mui/icons-material/Textsms';


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
                    <Card className='card1-sectionFive'>
                        <img src= {card1}/>
                        <CardContent>
                            <p>
                                How to work with prototype design with adobe xd featuring tools
                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                22 Comments
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className='card1-sectionFive'>
                        <img src= {card2}/>
                        <CardContent>
                            <p>
                                Create multiple artboard by using figma prototyping development                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                15 Comments
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className='card1-sectionFive'>
                        <img src= {card3}/>
                        <CardContent>
                            <p>
                                Convert your web layout theming easily with sketch zeplin extension                            </p>
                            <Button className="boton-card" startIcon={<TextsmsIcon />} style={{textTransform:'capitalize'}}>
                                18 Comments
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>            
        </>
    )}