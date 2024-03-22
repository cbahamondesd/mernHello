const mongoose = require('mongoose'); // Importamos mongoose para conectarnos a la base de datos

const UsuarioSchema = new mongoose.Schema({ // Creando el esquema usuario con mongoose
    firstname: { // nombre de usuario
        type: String, //Tipo de dato
        required: true, //Para que sea obligatorio
        trim: true //Para que no se guarden espacios en blanco
    },
    lastname: { // apellido de usuario
        type: String, //Tipo de dato
        required: true, //Para que sea obligatorio
        trim: true //Para que no se guarden espacios en blanco
    },
    email:{
        type: String, 
        required: true,
        trim: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true //Para que guarde la fecha de creación y actualización de usuario (createdAt, updatedAt)
    
})

module.exports = mongoose.model('Usuario', UsuarioSchema); // Exportando el modelo de persona