import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
//   import { useNavigate } from "react-router-dom";
// import axiosInstance from "../axiosInterceptor";

const Empdataadmin = () => {
  // const data=[{blogname:'FoodBlog',blogimg:'',blogdesc:'Food Blog'},{blogname:'TravelBlog',blogimg:'',blogdesc:'Travel Blog'},{blogname:'MovieBlog',blogimg:'',blogdesc:'Movie Blog'}]
  const [data, setData] = useState([]);
  //   const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/emp")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   function update_val(val) {
  //     navigate("/add", { state: { val } });
  //   }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ marginTop: "2%", marginLeft: "4%" }}>
        {data.map((item) => (
          <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="green iguana"
              />
              <CardContent sx={{ height: 90 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "success.main", textAlign: "center" }}
                >
                  {" "}
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "center" }}
                >
                  {item.position}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "center" }}
                >
                  {item.location}
                </Typography>
                <br />
                <br />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Empdataadmin;
