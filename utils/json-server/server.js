const jsonServer = require('json-server')
const server = jsonServer.create()

/**
 * The path you provide to the jsonServer.router function is relative to the directory from where you launch your node process.
*/ 
//const router = jsonServer.router('db.json')

/**
 * If you run the above code from another directory, it’s better to use an absolute path:
 */
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})