import mongoose from "mongoose";
import { Schema, Types, model, Model } from "mongoose";
//import { venta } from "../intarfaces/venta.interface";

//const mongoose = require('mongoose')



const ventaSchema = new mongoose.Schema(
    {
        name_seller: {
            type: String,
            required: true,

        },

        online_seller: {
            type: String,

        },

        sale: {
            type: Array,
            default: [],
            required: true,
        },

        messenger_service: {
            type: String,
        },

        price_sale: {
            type: Number,
            required: true,
        },

        online_sale: {
            type: Boolean,
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

const VentaModel = model('VentaModel', ventaSchema) // nombre de la tabla , schema
module.exports = { VentaModel }

