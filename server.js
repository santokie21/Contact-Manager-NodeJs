const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
