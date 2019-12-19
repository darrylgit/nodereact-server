const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

const keys = require("./config/keys");

const DB = keys.mongoURI.replace("<password>", keys.mongoPassword);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connnection successful!"));

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
