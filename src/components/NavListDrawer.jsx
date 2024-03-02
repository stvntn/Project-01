import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import LoginIcon from '@mui/icons-material/Login';

export default function NavListDrawer({navLinks}) {
    return (
        <div className="lista-drawer">
            <List>
                {
                    navLinks.map(item => (
                        <ListItem 
                            disablePadding 
                            key={item.tittle}
                            style={{
                                width: '320px'
                            }}
                        >
                            <ListItemButton
                                sx={{color:'black'}}
                                component='a'
                                href={item.path}
                            >
                                <ListItemIcon sx={{color:'blue'}}>{item.icon}</ListItemIcon>                                
                                <ListItemText>{item.tittle}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            
            <Divider />

                <ListItem disablePadding>
                    <ListItemButton sx={{color:'purple'}}>
                        <ListItemIcon>
                            <LoginIcon sx={{color:'purple'}}/>
                        </ListItemIcon>
                        <ListItemText>
                            Join us now
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </ List>
        </div>
    )
}