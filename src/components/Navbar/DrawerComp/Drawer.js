import React ,{useState}  from "react";
import {Drawer , List , ListItemText , ListItemIcon , AppBar, Box, IconButton, ListItemButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from "@mui/icons-material/Menu"
import { styled } from "@mui/material/styles"

const StyledList = styled(List)({
    width: '15rem'
})


const DrawerComp = () => {
    const[openDrawer , setOpenDrawer] = useState(false);

    return (
        <div>
            <AppBar >
                <Box>
                    <IconButton
                        edge="end"
                        onClick={() => setOpenDrawer(!openDrawer)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>

            <Drawer open={openDrawer} >
                <StyledList>
                    <ListItemButton divider>
                        <ListItemIcon>
                            <IconButton onClick={() => setOpenDrawer(false)}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Services</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Contact</ListItemText>
                    </ListItemButton>
                </StyledList>
            </Drawer>
        </div>
    );
}

export default DrawerComp;
