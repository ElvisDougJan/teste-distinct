const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const { saveModel } = require('./repository')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => console.log(`Rodando na porta ${port}`))

let connectString = ''

if (process.env.NODE_ENV === 'dev') {
  connectString = 'mongodb://localhost:27017/teste'
} else {
  connectString = 'mongodb://root:rootroot@docdb-2019-10-11-01-27-21.cluster-c51qpgci5gsw.us-east-1.docdb.amazonaws.com:27017/teste?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0'
}

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado com sucesso no Mongo!'))
  .catch(err => console.log('Erro ao conectar no Mongo', err))

const rota = require('./routes')
rota(app)

module.exports = app
