import React from "react"
import {Box, Container } from "@material-ui/core"
import "./footer.css"

const Footer = () => {
    return ( 
        <footer>
         <Box bgcolor="secondary.main"
              pt={1.5}
              pb={1.5}
              spacing-between= {3}
         >
           <Container>
            <Box 
               ml={7}
               color = "white"
               display ="flex"
               >
                  <br />
                     All rights reserved &reg; {new Date().getFullYear()}
               </Box> 
            </Container>
         </Box>
        </footer>
        
     );
}
export default Footer;
