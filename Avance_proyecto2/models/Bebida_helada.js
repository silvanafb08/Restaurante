const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bebida_heladaSchema = new Schema({

    BEBIDA_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    NOMBRE_BEBIDA:{
        type:String,
        trim:true
    },
    TIPO_BEBIDA:{
        type:String,
        trim:true
    },
    INGREDIENTES_BEBIDA:{
        type:String
    },
    CANTIDAD_BEBIDA:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Bebida_helada', bebida_heladaSchema);