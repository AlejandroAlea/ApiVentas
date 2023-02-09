import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/items";
import { logMiddleware } from "../middleware/log";

const router = Router();
/**
 * http://localhost:3002/items [GET] para acceder a los objetos un get
 
router.get("/", (req: Request, res: Response) => {
    res.send({ data: "Aqui_van_los_modelos" });
});*/ //se pone primero para ver si connect luego de los controllers lo cambio

/**
 * cambio a esto para los routers
 */

router.get("/:id", logMiddleware, getItem);

router.get("/", getItems);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };