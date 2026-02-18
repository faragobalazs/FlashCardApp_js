import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Language from "./models/Language.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
const PORT = 4000;

await mongoose.connect(process.env.MONGODB_URI);

app.get("/api/languages", async (req, res) => {
  const languages = await Language.find({}).select("name").lean();
  res.json(languages);
});

app.get("/api/languages/:id", async (req, res) => {
  const { id } = req.params;
  const languages = await Language.findById(id).lean();
  res.json(languages);
});

app.get("/api/languages/name/:name", async (req, res) => {
  const languages = await Language.findOne({ name: req.params.name }).lean();
  res.json(languages);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
