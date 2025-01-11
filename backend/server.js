import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

// QBVDqdgYfLBQ8OkD
// mongodb://suratBox:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-m1x9qb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
