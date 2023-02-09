import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo"; //conexion con mongo



const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());          //los cors para que tengan acceso al sitio
app.use(express.json());  //resiva datos formato .json por el body
app.use(router);          //las rutas
db().then(()=> console.log("connect ready"));   
app.listen(PORT, () => console.log(`Listen for port ${PORT}`));
