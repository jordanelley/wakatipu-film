import React ,{useState} from "react"
import {AppBar , Tab , Tabs , useMediaQuery} from "@material-ui/core";
import DrawerComp from "./DrawerComp/Drawer"

const Navbar = () => {
    const [value , setValue] = useState(0);
    const handleClickTab = ( e , newValue) => {
         setValue(newValue);
    }

    const useSideBar = useMediaQuery('(max-width:600px)')

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    return ( 
        <div>
          <AppBar position="static"   style={{position:"fixed"}}>
             {useSideBar ? <DrawerComp /> :
            <div>
              <Tabs fullwidth={"true"}
                onChange={handleClickTab} 
                value={value} 
                centered>

                  <LinkTab label="Home" href="/" />
                  <LinkTab label="Services" href="/hero" />
                  <LinkTab label="Products" href="/about" />
                  <LinkTab label="Contact" href="/about" />
              </Tabs>
            </div>
            }

        </AppBar>
        </div>
     );
}
 
export default Navbar;
