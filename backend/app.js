const express = require("express");
const app = new express();
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
require("./db/connection");

const basicRoutes1 = require("./routes/userRoutes");
app.use("/user", basicRoutes1);

const basicRoutes2 = require("./routes/adminRoutes");
app.use("/admin", basicRoutes2);

const basicRoutes3 = require("./routes/empRoutes");
app.use("/emp", basicRoutes3);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
