import { Button, Typography } from "@mui/material";

import one from '../assets/card3/1.svg';
import two from '../assets/card3/2.svg';
import three from '../assets/card3/3.svg';
import four from '../assets/card3/4.svg';
import five from '../assets/card3/5.svg';
import six from '../assets/card3/6.svg'


export default function sectionThree() {

    return (
        <div className="div-sectionThree">
            <Typography className="typography1">
                Working space
            </Typography>

            <Typography className="typography2">
                Let’s meet our interior room decoration
            </Typography>

        <div className="img">
            <div>
            <img src= { one } width= "95%"  style={{marginBottom: '10px'}} />
            <img src= { four } width= "95%" />
            </div>
            <div>
            <img src= { two } width= "95%" style={{marginBottom: '10px'}} />
            <img src= { five } width= "95%" />
            </div>
            <div>
            <img src= { three } width= "95%" style={{marginBottom: '10px'}} />
            <img src= { six } width= "95%" />
            </div>
        </div>

            <Button className="button-caja3"
                fullWidth
                variant="contained"
                color="inherit"
                disableElevation                
            >
                Explore more
            </Button>
        </div>      
    )
}