import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbaradmin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#388e3c" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Workfolio
          </Typography>
          <Link to={"/admindata"} style={{ color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/addemp"} style={{ color: "white" }}>
          <Button color="inherit">Add Employee</Button>
          </Link>
          <Link to={"/"} style={{ color: "white" }}>
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
