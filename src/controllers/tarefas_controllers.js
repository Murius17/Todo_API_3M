module.exports = (app) => 
{
    app.get('/tarefas', (req,resp) =>{
        resp.send('teste do banco tarefas')
    });

    app.get('/tarefas:id', (req, resp) =>{
        resp.send('usuarios certo');
    });

    app.post('/tarefas', (req, resp) =>{
        resp.send('usuario inserido com sucesso');
    });

    app.delete('/tarefas:id', (req, resp) => {
        resp.send('usuario deletado com sucesso');
    });

    app.put('/tarefas:id', (req, resp) => {
        resp.send('usuario atualizado com sucesso');
    });

    
};