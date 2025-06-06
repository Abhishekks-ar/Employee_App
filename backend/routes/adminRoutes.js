const express = require("express");
const router = express.Router();
const jwt =require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const adminModel = require("../model/adminData");
router.post('/login', async (req, res) => {
  try {
    const admin = await adminModel.findOne({ email: req.body.email });
    if (!admin) {
      res.status(404).send("admin not found");
    } else {
      if (admin.password == req.body.password) {
        const payload={email:admin.email,password:admin.password}
        const tokenad=jwt.sign(payload,'emptokenad');

        res.status(200).send({message:'Admin Login Successful',
          token:tokenad

        })
      } else {
        res.status(404).send({message:'Invalid credentials'});
      }
    }
  } catch (error) {
    res.status(404).send("Error");
  }


});

module.exports = router;