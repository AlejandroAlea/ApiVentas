import { Vendedor } from "../intarfaces/vendedor.interface"
import vendedorModel from "../models/vendedor.model"


/**
 * estamos insertando los datos y return la respuesta
 * @param vendedor 
 * @returns 
 */
const insertVendedor = async (vendedor: Vendedor) => {    //insert que cumpla con la interface de vendedor
    const responseInsert = await vendedorModel.create(vendedor)  //await que se le pasa un vendedor
    return responseInsert

}

const getVendedors = async () => {
    const responseVendedor = await vendedorModel.find({})
    return responseVendedor
}

const getVendedor = async (id: string) => {
    const responseVendedor = await vendedorModel.findOne({ _id: id })
    return responseVendedor
}

const updateVendedor = async (id: string, data: Vendedor) => {  // se le pasa id al cambiar y la data xq necesita una interface tipo a update(vendedor)
    const responseVendedor = await vendedorModel.findOneAndUpdate({ _id: id }, data, {
        new: true,  //devuelve ya el update
    })
    return responseVendedor
}

const deleteVendedor = async (id: string) => {
    const responseVendedor = await vendedorModel.deleteOne({ _id: id })
    return responseVendedor
}

export { insertVendedor, getVendedors, getVendedor, updateVendedor, deleteVendedor }
