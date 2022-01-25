const mongoose = require('mongoose');
const { Schema } = mongoose;

const GastosSchema = new Schema({
    tipo:{type:String, required:true},
    ruc:{type:String, required: true},
    empresa:{type:String, required:true},
    monto:{type:Number, required:true}
});

//metodo para encontrar por tipo
//GastosSchema.static('findByTipo', function(tipo) { return this.find({ tipo }); });
   

module.exports = mongoose.model('gasto', GastosSchema);