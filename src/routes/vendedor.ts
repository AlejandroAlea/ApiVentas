import { Router } from "express";
import { deletevendedor, getvendedor, getvendedors, postvendedor, updatevendedor } from "../controllers/vendedor";
import { logMiddleware } from "../middleware/log";


const router = Router();

router.get("/:id", logMiddleware, getvendedors)

router.get("/", getvendedor)

router.post("/", postvendedor)

router.put("/:id", updatevendedor)

router.delete("/:id", deletevendedor)

export { router };
