
import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";
import dbConnect from "../config/mongo";

const getventa = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_GET_VENTA");

    }

};

const getventas = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_GET`_VENTA`");

    }
    
};

const updateventa = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_VENTA");

    }

};

const postventa = ({ body }: Request, res: Response) => {
    try {
        res.send(body);

    } catch (e) {
        handleHttp(res, "ERROR_POST_VENTA");

    }

};

const deleteventa = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "ERROR_DELETE_VENTA");

    }

};

export { getventa, getventas, updateventa, postventa, deleteventa };