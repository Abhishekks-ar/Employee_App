import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userform, setUserForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function capValue(e) {
    e.preventDefault(); 
    axios
      .post("http://localhost:3000/user/login", userform)
      .then((res) => {
        alert(res.data.message);
        // if (res.data.token) {
        // sessionStorage.setItem("token", res.data.token);
        navigate("/userdata");
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
          User Login
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={capValue} // attach the submit handler to the form
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setUserForm({ ...userform, email: e.target.value });
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setUserForm({ ...userform, password: e.target.value });
            }}
          />
          <Button
            className="animated-btn"
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            sx={{ width: "160px", alignSelf: "center" }}
          >
            Login
          </Button>
          <Link to={"/admin"}>
            <Typography color="primary">
              Are you an admin? Click here to log in.
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
