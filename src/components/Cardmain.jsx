import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

export default function Cardmain() {
      
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
                        ml: '15px'
                    }}                   
                    fontSize= '45px'
                    fontWeight= '700'
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

                <TextField
                    id="filled-select-currency-native"
                    select
                    label="Find workplace"                    
                    SelectProps={{
                        native: true,
                    }}                    
                    variant="outlined"
                    fullWidth
                    sx={{
                        width: '440px',  
                        height: '55px',
                        mt: '30px',
                        ml: '15px',
                        mb: '20px'
                    }}
                >                               
                    
                </TextField>
            
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