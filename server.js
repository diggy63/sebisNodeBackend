const express = require("express");

require("dotenv").config();

require("./database/conn.js");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

//our route definitions
app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/auth", require("./routes/api/user"));
app.use("/gallery", require("./routes/api/gallery"));
app.use("/carousel", require("./routes/api/carousel"));
app.use("/catering", require("./routes/api/catering.js"));

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
