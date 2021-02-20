const TarefasDao = require('../DAO/tarefas_DAO');
module.exports = (app, bd) => 
{
    const tarefasDAO = new TarefasDao(bd);


    app.get('/tarefas', async (req,resp) =>{
        try
        { const tarefas = await tarefasDAO.allTarefas()
            resp.send(tarefas)} 
        catch (err) {resp.send (err)            
        }
        
    });

    app.get('/tarefas/:id', async (req, resp) =>{
        let buscando = req.params.id;
        try
        { const tarefasId = await tarefasDAO.sendParamsTarefas(buscando);
            resp.send(tarefasId)} 
        catch (err) {resp.send (err)            
        }
        
    });

    app.post('/tarefas', async (req, resp) =>{
        try
        { const tarefasInseridas = await tarefasDAO.insertTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario]);
            resp.send(tarefasInseridas)} 
        catch (err) {resp.send (err)            
        }
        
    });

    app.delete('/tarefas/:id', async (req, resp) => {
        let deletando = req.params.id;
        try
        { const tarefasDeletadas = await tarefasDAO.deleteTarefas(req.deletando.id);
            resp.send(tarefasDeletadas)} 
        catch (err) {resp.send (err)            
        }
        
    });

    app.put('/tarefas/:id', async (req, resp) => {
        try
        { const tarefasUpadas = await tarefasDAO.updateTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id]);
            resp.send(tarefasUpadas)} 
        catch (err) {resp.send (err)            
        }
        
    });

    
};