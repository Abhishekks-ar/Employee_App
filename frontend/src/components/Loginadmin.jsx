import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const Loginadmin = () => {
  const [adminform, setAdminForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function capValue() {
    axios
      .post("http://localhost:3000/admin/login", adminform)
      .then((res) => {
        alert(res.data.message);
        if (res.data) {
          navigate("/admindata");
        }
        // if(res.data.token){
        //   sessionStorage.setItem('token',res.data.token)
        //   navigate('/blogs');
        // }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
      });
  }
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "2rem",
          width: "100%",
          maxWidth: "300px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Admin Login
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setForm({ ...adminform, email: e.target.value });
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setForm({ ...adminform, password: e.target.value });
            }}
          />
          <Button
            className="animated-btn"
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            sx={{ width: "160px", alignSelf: "center" }}
            onClick={capValue}
          >
            Login
          </Button>
          <Link to={"/"}>
            <Typography color="primary">
              Are you a user? Click here to log in.
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Loginadmin;
