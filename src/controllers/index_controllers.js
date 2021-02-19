module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send('<h1>Parametro teste 5</h1>')
    })
}