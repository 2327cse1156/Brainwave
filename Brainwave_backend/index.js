import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import courseRoute from "./routes/courseRoute.js"
dotenv.config({});

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
// apis call
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course",courseRoute);
app.listen(PORT, () => {
  console.log(`Server is listening at port http://localhost:${PORT}`);
});
