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
app.use(morgan("dev")); // logging
app.use(express.json()); // parse form data --- do I need it if I send only files ???

// Routes
app.use("/api/pic", require("./routes"));

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not found!");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Run server
const port = config.get("port") || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
