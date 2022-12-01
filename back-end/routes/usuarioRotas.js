const router = require('express').Router()
const Usuario = require('../models/Usuario')

// Criação de usuarios
router.post('/add_user/', async (req, res) => {
try {
    const {nome, email, senha, telefone} = req.body

    const usuario = {
        nome,
        email,
        senha,
        telefone
    }

    const nomeRepetido = await Usuario.findOne({nome});
    const emailRepetido = await Usuario.findOne({email});
    const telefoneRepetido = await Usuario.findOne({telefone});

    if(nomeRepetido){
        return res.status(404).json({message: 'Nome já existente!'})
    }
    if(emailRepetido){
        return res.status(404).json({message: 'E-mail já existente!'})
    }
    if(telefoneRepetido){
        return res.status(404).json({message: 'Telefone já existente!'})
    }

    await Usuario.create(usuario)

    return res.status(201).json(usuario)

}catch (error) {
    return res.status(500).json({error: error})
}
})

// Obter todos os usuarios
router.get('/users/', async (req, res) => {
    try {
        
        const usuarios = await Usuario.find()

        return res.status(200).json(usuarios)

    } catch (error) {
        return res.status(500).json({error: error})
    }
})

// Obter usuario especifico
router.get('/users/:id', async (req, res) => {

    try {

        const id = req.params.id

        const usuario = await Usuario.findOne({_id: id})

        if(!usuario){
            return res.status(422).json({message: 'Usuário não encontrado!'})
        }
        
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({error: error})
    }

})

// Editar usuario selecionado
router.put('/edit_user/:id', async (req, res) => {

    try {

    const id = req.params.id

    const {nome, email, senha, telefone} = req.body

    const usuario = {
        nome,
        email,
        senha,
        telefone
    }

        const updateUsuario = await Usuario.updateOne({_id: id}, usuario)

        return res.status(200).json(usuario)

    } catch (error) {
        return res.status(500).json({error: error})
    }
    
})

// Remover usuario especifico
router.delete('/delete_user/:id', async (req, res) => {

    try {

    const id = req.params.id

    const usuario = await Usuario.findOne({_id: id})

    if(!usuario){
        return res.status(422).json({message: 'Usuário não encontrado!'})
    }

        await Usuario.deleteOne({_id: id})

        return res.status(200).json({message: "Usuario removido com sucesso!"})
        
    } catch (error) {
        return res.status(500).json({error: error})
    }

})

module.exports = router