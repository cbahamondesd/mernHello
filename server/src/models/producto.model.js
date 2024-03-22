const mongoose = require('mongoose'); // Importamos mongoose para conectarnos a la base de datos

const ProductoSchema = new mongoose.Schema({ // Creando el esquema producto con mongoose
    titulo: { // titulo producto
        type: String, //Tipo de dato
        required: true, //Para que sea obligatorio
        trim: true, //Para que no se guarden espacios en blanco
        unique: true 
    },
    precio: { // valor del producto
        type:  Number, //Tipo de dato
        required: true //Para que sea obligatorio
    },
    descripcion:{
        type: String, 
        required: true,
        trim: true,
        unique: true 
    },
},{
    timestamps: true //Para que guarde la fecha de creación y actualización de productos (createdAt, updatedAt)
    
})

module.exports = mongoose.model('Producto', ProductoSchema); // Exportando el modelo de producto