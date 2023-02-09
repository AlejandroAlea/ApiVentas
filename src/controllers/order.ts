import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../intarfaces/req-ext";
import { JwtPayload } from "jsonwebtoken";

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo lo ven personas con session / JWT",
            user: req.user,
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET`_PERSONS`");
    }
};

export { getItems, };