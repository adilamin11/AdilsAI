import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import promptRoutes from './routes/prompt.route.js';
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 4001;
const MONGO_URI = process.env.Mongo_URI;
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


//  Middleware first
app.use(express.json());
app.use(cookieParser());

//  Routes after middleware
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/AdilsAi", promptRoutes);

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
