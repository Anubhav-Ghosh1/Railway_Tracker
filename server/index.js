import express from "express";
import { config } from "dotenv";
import gettrain from "./routes/getTrains.js";
import cors from "cors";
config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors({
  origin:"http://localhost:3000",
  // origin: ['http://localhost:3000', 'http://192.168.1.7:3000'],
  credentials: true,
}))
app.use(express.json());

app.use("/api/v1", gettrain);
app.get("/a",(req,res)=>{
  console.log(req.body.temp)
  console.log("hello")
  res.send({"hello":"hi"})
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
