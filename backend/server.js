const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const testRoutes = require("./routes/test.routes");
const expenseRoutes = require("./routes/expense.routes");



const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/expenses", expenseRoutes);



app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "BerriFunds backend running" });
});

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});