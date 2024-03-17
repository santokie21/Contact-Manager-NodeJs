const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoute"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
