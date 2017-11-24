var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function(err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function(app) {
    app.get('/api/todos', function(req, res) {
        getTodos(res);
    });

    app.post('/api/todos', function(req, res) {
        Todo.create({
            fabricante: req.body.fabricante,
            cliente: req.body.cliente,
            lote: req.body.lote,
            nueva: req.body.nueva,
            correo: req.body.correo,
            tambor1: req.body.tambor1,
            tambor1obs: req.body.tambor1obs,
            tambor2: req.body.tambor2,
            tambor2obs: req.body.tambor2obs,
            tambor3: req.body.tambor3,
            tambor3obs: req.body.tambor3obs,
            tambor4: req.body.tambor4,
            tambor4obs: req.body.tambor4obs,
            tambor5: req.body.tambor5,
            tambor5obs: req.body.tambor5obs,
            tambor6: req.body.tambor6,
            tambor6obs: req.body.tambor6obs,
            tambor7: req.body.tambor7,
            tambor7obs: req.body.tambor7obs,
            tambor8: req.body.tambor8,
            tambor8obs: req.body.tambor8obs,
            tambor9: req.body.tambor9,
            tambor9obs: req.body.tambor9obs,
            tambor10: req.body.tambor10,
            tambor10obs: req.body.tambor10obs,
            totalTambor: req.body.totalTambor,
            pedestal1: req.body.pedestal1,
            pedestal1obs: req.body.pedestal1obs,
            pedestal2: req.body.pedestal2,
            pedestal2obs: req.body.pedestal2obs,
            pedestal3: req.body.pedestal3,
            pedestal3obs: req.body.pedestal3obs,
            pedestal4: req.body.pedestal4,
            pedestal4obs: req.body.pedestal4obs,
            totalPedestalFrontal: req.body.totalPedestalFrontal,
            pedestal5: req.body.pedestal5,
            pedestal5obs: req.body.pedestal5obs,
            pedestal6: req.body.pedestal6,
            pedestal6obs: req.body.pedestal6obs,
            pedestal7: req.body.pedestal7,
            pedestal7obs: req.body.pedestal7obs,
            pedestal8: req.body.pedestal8,
            pedestal8obs: req.body.pedestal8obs,
            pedestal9: req.body.pedestal9,
            pedestal9obs: req.body.pedestal9obs,
            totalPedestalTrasero: req.body.totalPedestalTrasero,
            lavado1: req.body.lavado1,
            lavado1obs: req.body.lavado1obs,
            lavado2: req.body.lavado2,
            lavado2obs: req.body.lavado2obs,
            lavado3: req.body.lavado3,
            lavado3obs: req.body.lavado3obs,
            lavado4: req.body.lavado4,
            lavado4obs: req.body.lavado4obs,
            lavado5: req.body.lavado5,
            lavado5obs: req.body.lavado5obs,
            totalLavado: req.body.totalLavado,
            general1: req.body.general1,
            general1obs: req.body.general1obs,
            general2: req.body.general2,
            general2obs: req.body.general2obs,
            general3: req.body.general3,
            general3obs: req.body.general3obs,
            general4: req.body.general4,
            general4obs: req.body.general4obs,
            general5: req.body.general5,
            general5obs: req.body.general5obs,
            general6: req.body.general6,
            general6obs: req.body.general6obs,
            general7: req.body.general7,
            general7obs: req.body.general7obs,
            general8: req.body.general8,
            general8obs: req.body.general8obs,
            general9: req.body.general9,
            general9obs: req.body.general9obs,
            general10: req.body.general10,
            general10obs: req.body.general10obs,
            general11: req.body.general11,
            general11obs: req.body.general11obs,
            general12: req.body.general12,
            general12obs: req.body.general12obs,
            general13: req.body.general13,
            general13obs: req.body.general13obs,
            general14: req.body.general14,
            general14obs: req.body.general14obs,
            general15: req.body.general15,
            general15obs: req.body.general15obs,
            general16: req.body.general16,
            general16obs: req.body.general16obs,
            general17: req.body.general17,
            general17obs: req.body.general17obs,
            general18: req.body.general18,
            general18obs: req.body.general18obs,
            general19: req.body.general19,
            general19obs: req.body.general19obs,
            totalGeneral: req.body.totalGeneral,
            luces1: req.body.luces1,
            luces1obs: req.body.luces1obs,
            luces2: req.body.luces2,
            luces2obs: req.body.luces2obs
        }, function(err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });

    });

    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};