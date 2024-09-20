import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL!,
  })
);
app.use(express.json());

app.use("/auth", auth);

app.listen(process.env.PORT!);
console.log(`App loadedddd! Listening at port ${process.env.PORT!}`);
