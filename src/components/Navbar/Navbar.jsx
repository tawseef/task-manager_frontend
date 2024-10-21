// import React from 'react'
// import styles from "./Navbar.module.css";

// function Navbar() {
//   return (
//     <div className={styles.navDiv}>Task Manager</div>
//   )
// }



import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


// export default Navbar