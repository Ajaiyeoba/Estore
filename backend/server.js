import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import connectCloudinary from "./config/cloudinary.js";

// App config

const app = express();
const port = process.env.PORT || 4000;
connectDB() 
connectCloudinary
// MIDDLEWARES
app.use(express.json());
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter)

app.get("/", (req, res) => {
  res.send("API Workiing");
});

app.listen(port, () => console.log("Server started on PORT :" + port));
