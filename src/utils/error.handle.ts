import { Response } from "express";

//manejador de errores
const handleHttp = (res: Response, error : string, errorRaw?: any) =>{
    console.log(errorRaw)
    res.status(500)
    res.send({error})
};

export {handleHttp};