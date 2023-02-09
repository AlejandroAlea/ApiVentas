import { Schema, Types, model, Model } from "mongoose";
import { Vendedor } from "../intarfaces/vendedor.interface";


const vendedorSchema = new Schema<Vendedor>(
    {
        name: {
            type: String,
            required: true, //validar, decir que son datos requeridos
        },

        direccion: {
            type: String,
            required: true,
        },
        tarjeta_banco: {
            type: Number,
        },
        carnet_identidad: {
            type: Number,
            required: true,
        },
        telefono:{
            type: Number,
            required: true,
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

const vendedorModel = model("vendedor", vendedorSchema) // nombre de la tabla , schema
export default vendedorModel
