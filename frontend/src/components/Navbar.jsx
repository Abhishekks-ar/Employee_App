import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#388e3c" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Workfolio
          </Typography>
          <Link to={"/userdata"} style={{ color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              sessionStorage.removeItem("tokenus");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
