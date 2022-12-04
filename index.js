// node create server using express
const dotenv = require("dotenv");
const express = require('express')
const app = express()
const router = require("./router")
const mongoose = require("mongoose");
const cors = require("cors");


//listening on port 80
const port = 80

//console log server port
app.listen(process.env.PORT || port, () => {
    console.log(`Server up on port ${port}`);
})


//use env
dotenv.config();

//connect to db
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
