import { Prenda } from "../intarfaces/prenda.interface"
import ItemModel from "../models/items.model"


/**
 * estamos insertando los datos y return la respuesta
 * @param item 
 * @returns 
 */
const insertPrenda = async (item: Prenda) => {    //insert que cumpla con la interface de prenda
    const responseInsert = await ItemModel.create(item)  //await que se le pasa un itme
    return responseInsert

}

const getPrendas = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const getPrenda = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem
}

const updatePrenda = async (id: string, data: Prenda) => {  // se le pasa id al cambiar y la data xq necesita una interface tipo a update(prenda)
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
        new: true,  //devuelve ya el update
    })
    return responseItem
}

const deletePrenda = async (id: string) => {
    const responseItem = await ItemModel.deleteOne({ _id: id })
    return responseItem
}

export { insertPrenda, getPrendas, getPrenda, updatePrenda, deletePrenda }
