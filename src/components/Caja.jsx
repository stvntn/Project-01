import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Caja() {

    return (
        <Box
            sx={{ 
                width: '1040px',
                height: '311.25px',
                mt: '100px',
                ml: '440px'
             }}
                        
        >
            <Typography                
                color="primary"
                
            >
                Meet our Clients
            </Typography>

            <Typography
                variant="h5"
                mt={2}
            >
                 This guys are using our service and they're
                 more than happier ever.
            </Typography>

            <Box>
                
            </Box>
        </Box>
    )
}