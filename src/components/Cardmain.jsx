import * as React from 'react';
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

export default function Cardmain() {
    const [workplace, setWorkplace] = React.useState('');

    const handleChange = (event) => {
      setWorkplace(event.target.value);
    };
      
    return (
        <Card
            bgcolor="transparent"
            sx={{
                width: '500px',
                height: '530px',
                mt: '150px',
                ml: '28px',
       
                bgcolor: 'rgba(255, 255, 255, 0.93)'
            }} 
            elevation={0}           
        >
            <CardContent>
                <Typography 
                    sx={{
                        mt: '30px',
                        ml: '15px',
                        letterSpacing: '-3px'
                    }}                   
                    fontSize= '45px'
                    fontWeight= '900'
                    lineHeight={ '-1.5px' }
                    align="inherit"                  
                >
                    Coworking space that
                    will feel like home.
                </Typography>

                <Typography
                    sx={{
                        mt: '10px',
                        ml: '15px'
                    }}
                    fontSize= '17px'
                    fontWeight= '300px'
                    lineHeight={ '35px' }
                >
                    Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.
                </Typography>

                <div style={{
                        marginTop: '10px',
                        marginLeft: '15px',
                        marginRight: '15px',
                        marginBottom: '10px'   
                    }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Find workplace</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={workplace}
                            label="Find workplace"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Chicago, New York'}>Chicago, New York</MenuItem>
                            <MenuItem value={'Florida, Miami'}>Florida, Miami</MenuItem>
                            <MenuItem value={'California, San Francisco'}>California, San Francisco</MenuItem>
                            <MenuItem value={'New Mexico, Albuquerque'}>New Mexico, Albuquerque</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
                <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    sx={{
                        width: '440px',  
                        height: '55px',
                        ml: '15px'
                    }} 
                >
                Subscribe
                 </Button>
            </CardContent>
            
        </Card>
    );
}