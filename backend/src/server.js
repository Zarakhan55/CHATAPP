import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

// serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
