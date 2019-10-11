const { Schema, model } = require('mongoose')

const testesSchema = new Schema({
  mensagem: {
    type: String
  },
  to: {
    type: String
  },
  from: {
    type: String
  }
})

module.exports = model('teste', testesSchema)
