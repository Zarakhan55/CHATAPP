import express from "express";
import dotenv from "dotenv";
import Path from "path";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
dotenv.config();

const app = express();
const  __dirname = Path.resolve();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter)

//make ready for deployment 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}



app.listen(PORT, () => console.log("server running on port :"+PORT));
