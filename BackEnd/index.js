import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import coonectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http//localhost:8080",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
// "https://localhost:3000/api/v1/user/register"
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

app.listen(PORT, () => {
  coonectDB();
  console.log(`server is runing on Port ${PORT}`);
});
