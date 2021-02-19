const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const indexControllers = require('./controllers/index_controllers');
const usuariosControllers = require('./controllers/usuarios_controllers');
const tarefasControllers = require('./controllers/tarefas_controllers');
const bd = require('./infra/sqlite_db');

const port = 8080;
const app = express();
app.use(bodyParser.json());
app.use(cors());

indexControllers(app)
usuariosControllers(app, bd)
tarefasControllers(app, bd)

app.listen(port, ()=>{
    console.log(`Teste rodando. http://localhost:${port}`)
})