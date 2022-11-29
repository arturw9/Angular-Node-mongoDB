const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const usuarioRoutes = require('./routes/usuarioRotas')

app.use('/', usuarioRoutes)

// Acesso ao banco de dados MongoDB
const USER = encodeURIComponent('arturw9')
const SENHA = encodeURIComponent('ddtankw9100')
mongoose.connect(
    `mongodb+srv://${USER}:${SENHA}@desafiofullstackcluster.nq3bjuo.mongodb.net/fullstackbanco?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Banco de dados MongoDB conectado com sucesso!')
        app.listen(3000)
    })
    .catch((err)=> console.log(err))