const testeModel = require('./testeModel')

/*const teste = {
  message: 'Ola tudo bem',
  to: '449999999',
  from: '448888888'
}*/

async function saveModel () {
  for (let i = 0; i < 500; i++) {
    await testeModel.create({
      message: 'Ola tudo bem',
      to: Math.random(),
      from: '448888888'
    })
  }
}

module.exports = {
  saveModel
}