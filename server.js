const express = require("express");

require("dotenv").config();

require("./database/conn.js");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

//our route definitions
app.use("/auth", require("./routes/api/user"));

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});