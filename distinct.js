const TesteModel = require('./testeModel')

async function testeDistinct() {
  return TesteModel
    .distinct('to')
    .then(data => ({
      data,
      quantidade: data.length
    }))
    .catch(err => console.log('ERRO', err))
}

module.exports = {
  testeDistinct
}
