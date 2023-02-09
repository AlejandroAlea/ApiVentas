import { Schema, Types, model, Model } from "mongoose";
import { Prenda } from "../intarfaces/prenda.interface";


const ItemSchema = new Schema<Prenda>(
    {
        name: {
            type: String,
            required: true, //validar, decir que son datos requeridos
        },
        entry_price: {
            type: Number,
            required: true,
        },
        sale_price: {
            type: Number,
            required: true,
        },
        garment_type: {
            type: String,
            required: true,
        },

        input_amount: {
            type: Number,
            required: true,
        },
        gold_type: {
            type: String,
            enum: ["10k", "criollo"],
            required: true,
        },
        observation: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        seller_profit: {
            type: Number,
            required: true,
        },
        pay: {
            type: Boolean,
            require: true,
        },




    },

    {
        /**
         * configurando mongoose datos por version
         *  */
        timestamps: true,   // para cuando se guarde datos en la colleccion se cree 2 propiedades: fecha de creacion y de actualizacion
        versionKey: false,  //para que no lo use

    }
);

const ItemModel = model("items", ItemSchema) // nombre de la tabla , schema
export default ItemModel
