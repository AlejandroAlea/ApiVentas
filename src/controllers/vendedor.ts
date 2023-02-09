import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { insertVendedor, getVendedors, getVendedor, updateVendedor,  deleteVendedor } from "../services/vendedor.service";



const getvendedor = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getVendedor(id)
        const data = response ? response : "NOT_FOUND"
        res.send(data)

    } catch (e) {
        handleHttp(res, "ERROR_GET_PERSONS");

    }

};

const getvendedors = async (req: Request, res: Response) => {
    try {
        const response = await getVendedors()
        res.send(response)


    } catch (e) {
        handleHttp(res, "ERROR_GET`_PERSONS`");

    }

};

const updatevendedor = async({params, body}: Request, res: Response) => {
    try {
        const { id } = params
        const response = await updateVendedor(id, body)
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_PERSONS");

    }

};

const postvendedor = async({ body }: Request, res: Response) => {
    try {
        const responseVendedor = await insertVendedor(body)
        res.send(responseVendedor);

    } catch (e) {
        handleHttp(res, "ERROR_POST_PERSONS", e);

    }

};

const deletevendedor= async({ params }: Request, res: Response)=> {
    try {
        const { id } = params
        const response = await deleteVendedor(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_PERSONS");

    }

}

export { getvendedor, getvendedors, updatevendedor, postvendedor, deletevendedor };