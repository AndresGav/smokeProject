const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

// Abrir el sockett
io.on('connection', (socket) => {
   console.log('a user connected')
   socket.on('rv', (msg) => {
      console.log('message: ', msg)
   })
})
//Conectar servidor
app.use('/', require('./routes/index.routes'))

app.get('/conectar', (req, res) => {
   res.send('<h1>Conectado</h1>')
})

//Desconectar servidor
app.get('/desconectar', (req, res) => {
   //    socket.on('disconnect', () => {
   //       console.log('user disconnected')
   //    })
   res.send('<h1>Desconectado</h1>')
})



module.exports = { app, server, io }