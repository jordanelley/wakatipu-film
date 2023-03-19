import React ,{useState}  from "react";
import {Drawer , List , ListItemText , ListItem , ListItemIcon , AppBar, Box, IconButton } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from  "@material-ui/styles"
const drawerWidth = 240
const useStyle = makeStyles({
   
  list:{
    width:150,
  },
  drawer:{
    width: drawerWidth
  },
  drawerPaper:{
    width:drawerWidth
  }
})

const DrawerComp = () => {
    const classes = useStyle()
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

           <Drawer
            className={classes.drawer}
            classes ={{paper : classes.drawerPaper}}
            open={openDrawer}
           >
            <List className={classes.list}>
              <ListItem divider button>
                <ListItemIcon>   
                 <IconButton onClick={() => setOpenDrawer(false)}>
                    <ChevronLeftIcon/>
                 </IconButton>
                </ListItemIcon> 
              </ListItem>
                <ListItem  button>
                    <ListItemText>Home</ListItemText>

                </ListItem>
               <ListItem  button>
                   <ListItemText>Services</ListItemText>

               </ListItem>
                <ListItem button>
                    <ListItemText>Products</ListItemText>
                </ListItem>
                <ListItem  button>
                        <ListItemText>Contact</ListItemText>
                </ListItem>
               </List>
           </Drawer>
      </div>
     );
}
 
export default DrawerComp;
