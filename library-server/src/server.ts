import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "./config";
import mongoose from "mongoose";
import {registerRoutes} from './routes'

const PORT = config.server.port;
const app: Express = express();

app.use(express.json());
app.use(cors());

// Health check route (doesn't depend on DB)

(async function startUp() {
  try {
    await mongoose.connect(config.mongo.url);
 console.log("✅ Connected to the database successfully");

  registerRoutes(app);
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
  }
})();
