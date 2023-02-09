import { Router } from "express";
import { readdirSync } from "fs";
import mongoose from "mongoose";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * el nombre del archivo sea el nombre del prefijo de la ruta
 * quitar el prefijo ts
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift(); //sfift remueve , saca el primer elemento del array
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => { //import dinamyc
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

mongoose.set('strictQuery', false);


export { router };
