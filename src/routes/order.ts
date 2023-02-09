import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";


/**
 * esta ruta solo puede acceder  personas con seccion activa
 * y tengan JWT valido
 */
const router = Router();

router.get("/", checkJwt, getItems)

export { router };
 