import { Prenda } from "../intarfaces/prenda.interface"
import ItemModel from "../models/items.model"

const getOrders = async () => {
    const responseItem = await ItemModel.find({})
    
    return responseItem
}

export { getOrders }
