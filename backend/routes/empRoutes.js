const express = require("express");
const router = express.Router();
const jwt=require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const empModel = require("../model/empData");

function verifytokenad(req,res,next){
  const token=req.headers.token;
  try {
    if(!token) throw 'Unauthorized access';
    const payload=jwt.verify(token,'emptokenad');
    if(!payload) throw 'Unauthorized access';
    next();
  } catch (error) {
    res.status(404).send(error);
  }
}

function verifytokenus(req,res,next){
  const token=req.headers.token;
  try {
    if(!token) throw 'Unauthorized access';
    const payload=jwt.verify(token,'emptokenus');
    if(!payload) throw 'Unauthorized access';
    next();
  } catch (error) {
    res.status(404).send(error);
  }
}

//get
router.get("/",verifytokenad, async (req, res) => {
  try {
    const data = await empModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("No Data");
  }
});

// getuser
router.get("/get",verifytokenus, async (req, res) => {
  try {
    const data = await empModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("No Data");
  }
});

//post operation
router.post("/add",verifytokenad, async (req, res) => {
  try {
    var item = req.body;
    const data = new empModel(item);
    await data.save();
    res.status(200).send("POST successful");
  } catch (error) {
    res.status(404).send("POST unsuccessful");
  }
});

router.put("/update/:id",verifytokenad, async (req, res) => {
  try {
    const id = req.params.id;
    await empModel.findByIdAndUpdate(id, req.body);
    res.status(200).send("Update successful");
  } catch (error) {
    res.status(404).send("Update unsuccessful");
  }
});

// delete
router.delete("/delete/:id",verifytokenad, async (req, res) => {
  try {
    const id = req.params.id;
    await empModel.findByIdAndDelete(id);
    res.status(200).send("Data removed");
  } catch (error) {
    res.status(404).send("Data removal unsuccessful");
  }
});

module.exports = router;