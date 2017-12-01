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
    correo: {
        type: String,
        default: ''
    },
    tambor1: {
        type: Number,
        default: 0
    },
    tambor1uno: {
        type: Number,
        default: 0
    },
    tambor1dos: {
        type: Number,
        default: 0
    },
    tambor1tres: {
        type: Number,
        default: 0
    },
    tambor1cuatro: {
        type: Number,
        default: 0
    },
    tambor1cinco: {
        type: Number,
        default: 0
    },
    tambor1obs: {
        type: String,
        default: ''
    },
    tambor2: {
        type: Number,
        default: 0
    },
    tambor2obs: {
        type: String,
        default: ''
    },
    tambor3: {
        type: Number,
        default: 0
    },
    tambor3obs: {
        type: String,
        default: ''
    },
    tambor4: {
        type: Number,
        default: 0
    },
    tambor4obs: {
        type: String,
        default: ''
    },
    tambor5: {
        type: Number,
        default: 0
    },
    tambor5obs: {
        type: String,
        default: ''
    },
    tambor6: {
        type: Number,
        default: 0
    },
    tambor6obs: {
        type: String,
        default: ''
    },
    tambor7: {
        type: Number,
        default: 0
    },
    tambor7obs: {
        type: String,
        default: ''
    },
    tambor8: {
        type: Number,
        default: 0
    },
    tambor8obs: {
        type: String,
        default: ''
    },
    tambor9: {
        type: Number,
        default: 0
    },
    tambor9obs: {
        type: String,
        default: ''
    },
    tambor10: {
        type: Number,
        default: 0
    },
    tambor10obs: {
        type: String,
        default: ''
    },
    totalTambor: {
        type: Number,
        default: 0
    },
    pedestal1: {
        type: Number,
        default: 0
    },
    pedestal1obs: {
        type: String,
        default: ''
    },
    pedestal2: {
        type: Number,
        default: 0
    },
    pedestal2obs: {
        type: String,
        default: ''
    },
    pedestal3: {
        type: Number,
        default: 0
    },
    pedestal3obs: {
        type: String,
        default: ''
    },
    pedestal4: {
        type: Number,
        default: 0
    },
    pedestal4obs: {
        type: String,
        default: ''
    },
    totalPedestalFrontal: {
        type: Number,
        default: 0
    },
    pedestal5: {
        type: Number,
        default: 0
    },
    pedestal5obs: {
        type: String,
        default: ''
    },
    pedestal6: {
        type: Number,
        default: 0
    },
    pedestal6obs: {
        type: String,
        default: ''
    },
    pedestal7: {
        type: Number,
        default: 0
    },
    pedestal7obs: {
        type: String,
        default: ''
    },
    pedestal8: {
        type: Number,
        default: 0
    },
    pedestal8obs: {
        type: String,
        default: ''
    },
    pedestal9: {
        type: Number,
        default: 0
    },
    pedestal9obs: {
        type: String,
        default: ''
    },
    totalPedestalTrasero: {
        type: Number,
        default: 0
    },
    lavado1: {
        type: Number,
        default: 0
    },
    lavado1obs: {
        type: String,
        default: ''
    },
    lavado2: {
        type: Number,
        default: 0
    },
    lavado2obs: {
        type: String,
        default: ''
    },
    lavado3: {
        type: Number,
        default: 0
    },
    lavado3obs: {
        type: String,
        default: ''
    },
    lavado4: {
        type: Number,
        default: 0
    },
    lavado4obs: {
        type: String,
        default: ''
    },
    lavado5: {
        type: Number,
        default: 0
    },
    lavado5obs: {
        type: String,
        default: ''
    },
    totalLavado: {
        type: Number,
        default: 0
    },
    general1: {
        type: Number,
        default: 0
    },
    general1obs: {
        type: String,
        default: ''
    },
    general1: {
        type: Number,
        default: 0
    },
    general1obs: {
        type: String,
        default: ''
    },
    general2: {
        type: Number,
        default: 0
    },
    general2obs: {
        type: String,
        default: ''
    },
    general3: {
        type: Number,
        default: 0
    },
    general3obs: {
        type: String,
        default: ''
    },
    general4: {
        type: Number,
        default: 0
    },
    general4obs: {
        type: String,
        default: ''
    },
    general5: {
        type: Number,
        default: 0
    },
    general5obs: {
        type: String,
        default: ''
    },
    general6: {
        type: Number,
        default: 0
    },
    general6bs: {
        type: String,
        default: ''
    },
    general7: {
        type: Number,
        default: 0
    },
    general7obs: {
        type: String,
        default: ''
    },
    general8: {
        type: Number,
        default: 0
    },
    general8obs: {
        type: String,
        default: ''
    },
    general9: {
        type: Number,
        default: 0
    },
    general9obs: {
        type: String,
        default: ''
    },
    general10: {
        type: Number,
        default: 0
    },
    general10obs: {
        type: String,
        default: ''
    },
    general11: {
        type: Number,
        default: 0
    },
    general11obs: {
        type: String,
        default: ''
    },
    general12: {
        type: Number,
        default: 0
    },
    general12obs: {
        type: String,
        default: ''
    },
    general13: {
        type: Number,
        default: 0
    },
    general13obs: {
        type: String,
        default: ''
    },
    general14: {
        type: Number,
        default: 0
    },
    general14obs: {
        type: String,
        default: ''
    },
    general15: {
        type: Number,
        default: 0
    },
    general15obs: {
        type: String,
        default: ''
    },
    general16: {
        type: Number,
        default: 0
    },
    general16obs: {
        type: String,
        default: ''
    },
    general17: {
        type: Number,
        default: 0
    },
    general17obs: {
        type: String,
        default: ''
    },
    general18: {
        type: Number,
        default: 0
    },
    general18obs: {
        type: String,
        default: ''
    },
    general19: {
        type: Number,
        default: 0
    },
    general19obs: {
        type: String,
        default: ''
    },
    totalGeneral: {
        type: Number,
        default: 0
    }
});