import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SectionFirst() {
    const [workplace, setWorkplace] = React.useState('');

    const handleChange = (event) => {
      setWorkplace(event.target.value);
    };
      
    return (
            
        <div className='first-section2'>                 
            <div className='caja'>
                <div className='contenido-caja'>
                    <p className='primer-p'>
                        Coworking space that
                        will feel like home.
                    </p>

                    <p className='segundo-p'>
                        Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.
                    </p>
                    
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
                            mt: '15px',
                            mb: '30px'
                        }}
                        style={{
                            textTransform: 'capitalize'
                        }}                    
                    >
                    Subscribe
                    </Button>
                </div>
            </div>
        </div>        
    );
}