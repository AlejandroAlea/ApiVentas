//Connection MONGO i need ...
import "dotenv/config";   // necesitamos para implementar las variables de entorno .env
import { connect } from "mongoose"; // funcion connect viene de mongoose por la conexion con mongo

    /**
     * gestor de conexion con mongo
     */
async function dbConnect(): Promise<void> { //llamada de dbconnect
    const DB_URI = <string>process.env.DB_URI;  //db_uri lllamada de las variables de entorno, json con la direccion a connect
    await connect(DB_URI);                      //se conecta...
}

export default dbConnect;                       //se llama, se exporta esa conexion