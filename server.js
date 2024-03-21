const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const validateTokenHandler = require("./middleware/validateTokenHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(validateTokenHandler);
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
