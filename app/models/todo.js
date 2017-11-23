var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    fabricante: {
      type: String,
      default: ''
    },
    cliente: {
      type: String,
      default: ''
    },
    lote: {
      type: String,
      default: ''
    },
    nueva: {
      type: String,
      default: ''
    },
    tambor1: {
      type: Number,
      default: ''
    },
    tambor1obs: {
      type: String,
      default: ''
    }
});
