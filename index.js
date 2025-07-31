const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./src/config/dataBase");

const orderRouter = require('./src/routers/orderRouter');
const app = express();
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());
connectDB();


app.get("/", async (req, res) => {
      res.status(200).json({
        success: "Hello from the Bakery",
        message: "Server is running perfectly",
      });
});
app.use("/api/order",orderRouter);


app.listen(5000, () => {
  console.log('Server running on port 5000');
});
