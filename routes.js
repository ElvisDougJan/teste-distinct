const { testeDistinct } = require('./distinct')
const { saveModel } = require('./repository')

module.exports = app => {
  app.get('/save', async (req, res) => {
    await saveModel()
    return res.json('OK')
  })

  app.get('/teste', async (req, res) => {
    const resultado = await testeDistinct()
    res.json(resultado)
  })
}