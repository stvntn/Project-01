import { Button, Divider, TextField } from "@mui/material";

import logo from '../assets/SectionFive/logo.svg'

export default function Pie() {

    return (
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
    )
}