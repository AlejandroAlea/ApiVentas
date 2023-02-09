import { NextFunction, Request, Response } from "express"

/**
 * middleware es el encargado de decir si continuas o no
 * quien usa o de donde se usa , depende de las funciones que le agreguemos
 * @param req 
 * @param res 
 * @param next 
 */
const logMiddleware =(req: Request, res: Response, next: NextFunction )=>{  
    console.log("log")
    next() //next function para pasar a lo sigte y no dejar esperando al cliente, express se queda esperando

}

export {logMiddleware}