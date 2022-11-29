const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: Number,
        required: false,
        unique: true
    },
    
});

module.exports = mongoose.model('Usuario',usuarioSchema)