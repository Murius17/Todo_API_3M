module.exports = class TarefasDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    allTarefas()
    {
        return new Promise((resolve, reject)=>{
            /*"para caso de erro de sintaxe utiliar: "let sql = 'SELECT * FROM TAREFAS'*/
            this.bd.all(/* sql */'SELECT * FROM TAREFAS', (erro, linhas)=>{
                if(erro) reject(erro);
                else resolve(linhas);
            });
        });
    }

    sendParamsTarefas(buscando)
    {
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS WHERE id = ?', buscando, (erro, linhas)=>{
                if(erro) reject(erro);
                else resolve(linhas);
            });
        });
    }

    insertTarefas(inserindo)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)', inserindo, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir a tarefa');
                else resolve('Tarefa inserida');     
            });    
        });
    }

    deleteTarefas(deletando)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('DELETE FROM TAREFAS WHERE id = ?', deletando, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar a Tarefa');
                else resolve('Tarefa deletada');  
            });
        });
    }

    updateTarefas(atualizando)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE id = ?', atualizando, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar a tarefa');
                else resolve('Tarefa atualizada');           
            });
        });
    }
}