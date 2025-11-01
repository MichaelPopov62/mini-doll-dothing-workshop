import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();
console.log("✅ MongoDB connected");

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB, PORT } = process.env;
const DB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;
const app = express();


app.use(cors());
app.use(express.json());
// підключення роутів
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend працює!");
});
// підключення до бази даних
mongoose.connect(DB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ DB error:", err));

app.listen(PORT || 9090, () => console.log(`Server running on port ${PORT}`));
