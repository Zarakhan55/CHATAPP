import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter)



app.listen(PORT, () => console.log("server running on port :"+PORT));
