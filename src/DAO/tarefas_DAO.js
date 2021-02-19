module.exports = class TarefasDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    allTarefas()
    {
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    sendParamsTarefas(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.get('SELECT * FROM TAREFAS WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insertTarefas(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir a tarefa');
                else resolve('Tarefa inserida');     
            });    
        });
    }

    deleteTarefas(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('DELETE FROM TAREFAS WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar a Tarefa');
                else resolve('Tarefa deletada');  
            });
        });
    }

    updateTarefas(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar a tarefa');
                else resolve('Tarefa atualizada');           
            });
        });
    }
}