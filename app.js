const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Connect database
mongoose.connect(config.get("mongodb"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "There was a database error")
);
mongoose.connection.once("open", () => console.log("Connected to database"));

// Initialize middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/pic", require("./routes"));

// Run server
const port = config.get("port") || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
