/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import blogRoutes from "./routes/blog";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// app.get("/test", (req, res)=>{
//     res.json("OKLE")
// })

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });