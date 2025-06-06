import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptorad";
// import axios from "axios"; // Use axiosInstance here if you're intercepting

const Addemp = () => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    location: "",
    image: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state != null) {
      setForm({
        name: location.state.val.name,
        position: location.state.val.position,
        location: location.state.val.location,
        image: location.state.val.image,
      });
    } else {
      setForm({
        name: "",
        position: "",
        location: "",
        image: "",
      });
    }
  }, [location]);

  function addvalue(e) {
    e.preventDefault();
    if (location.state != null) {
      axiosInstance
        .put("http://localhost:3000/emp/update/" + location.state.val._id, form)
        .then((res) => {
          alert("Updated Successfully");
          navigate("/admindata");
        })
        .catch((error) => {
          console.log("Update Error:", error);
        });
    } else {
      console.log("Token being sent:", sessionStorage.getItem("tokenad"));
      console.log("Form data:", form);

      axiosInstance
        .post("http://localhost:3000/emp/add", form) // Use POST for adding
        .then((res) => {
          alert("Added Successfully");
          navigate("/admindata");
        })
        .catch((error) => {
          console.log("Add Error:", error);
        });
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: "40px",
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
          Employee Form
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={addvalue}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            label="Position"
            variant="outlined"
            fullWidth
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            sx={{
              width: "160px",
              alignSelf: "center",
              backgroundColor: "#388e3c",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Addemp;
