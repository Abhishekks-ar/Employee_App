import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptorad";
// import axiosInstance from "../axiosinterceptor";

const Empdataadmin = () => {
  // const data=[{blogname:'FoodBlog',blogimg:'',blogdesc:'Food Blog'},{blogname:'TravelBlog',blogimg:'',blogdesc:'Travel Blog'},{blogname:'MovieBlog',blogimg:'',blogdesc:'Movie Blog'}]
  const [data, setData] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/emp")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    function update_val(val) {
      navigate("/addemp", { state: { val } });
    }
    function delVal(val){
      axiosInstance.delete(`http://localhost:3000/emp/delete/${val._id}`).then((res)=>{
      alert("Deleted Successfully")
      setData(data.filter(item => item._id !== val._id)); 
      navigate('/admindata');
    }).catch((err)=>{
      console.log(err);
    }) 
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ marginTop: "2%",marginLeft:"4%" }}>
        {data.map((item) => (
          <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 155 }}
                image={item.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "success.main", textAlign:"center" }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textAlign:"center" }}>
                  {item.position}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textAlign:"center"  }}>
                  {item.location}
                </Typography>
                
                <br />
                <Button
                className="animated-btn"
                  variant="contained"
                  color="warning"
                  style={{ marginLeft: "15%",marginBottom:"3px" }}
                    onClick={() => {
                      update_val(item);
                    }}
                >
                  Update
                </Button>
                <Button
                className="animated-btn"
                  variant="contained"
                  color="error"
                  style={{ marginLeft: "15%"  }}
                  onClick={()=>{
                    delVal(item);
                  }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Empdataadmin;
