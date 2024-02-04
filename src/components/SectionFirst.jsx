import * as React from 'react';
import Navbar from './Navbar';
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";



export default function SectionFirst() {
    const [workplace, setWorkplace] = React.useState('');

    const handleChange = (event) => {
      setWorkplace(event.target.value);
    };
      
    return (
        
            <div className='first-section2'>   
                <Navbar /> 
                <Card
                    className='cardk'
                    bgcolor="transparent"
                    sx={{
                        width: '400px',
                        height: '400px',
                        mt: '80px',
                        mb: "100px",                               
                        bgcolor: 'rgba(255, 255, 255, 0.93)'
                    }} 
                    elevation={0}           
                >
                    <CardContent
                        sx={{
                            py: '20px',
                            px: '20px',                                     
                        }}
                    >
                        <Typography                                       
                            fontSize= '32px'
                            fontWeight= '900'
                            sx={{ 
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)'
                            }}                                                        
                        >
                            Coworking space that
                            will feel like home.
                        </Typography>

                        <Typography                    
                            fontSize= '15px'
                            fontWeight= '300px'
                            lineHeight={ '35px' }
                            sx={{
                                mt: '15px',
                                mb: '15px'
                            }}
                        >
                            Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.
                        </Typography>
                        
                            <FormControl 

                                fullWidth
                            >
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
                        
                        <Button                    
                            variant="contained"                    
                            fullWidth
                            sx={{
                                height: '50px',
                                mt: '15px'
                            }}
                            style={{
                                textTransform: 'capitalize'
                            }}                    
                        >
                        Subscribe
                        </Button>
                    </CardContent>
                </Card>
            </div>
        
    );
}