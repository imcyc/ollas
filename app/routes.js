var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function (app) {
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

    app.post('/api/todos', function (req, res) {
        Todo.create({
            fabricante: req.body.fabricante,
            cliente: req.body.cliente,
            lote: req.body.lote,
            nueva: req.body.nueva,
            tambor1: req.body.tambor1,
            tambor1obs: req.body.tambor1obs
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });

    });

    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
