const request = require('supertest')
const { app, server } = require('../src/app')
const { startServer } = require('../src/server')

// Simular servidor
// const express = require('express')
// const router = require('../../src/routes/index.routes')
// const app = new express()
// app.use('/', router)

let requestServer

beforeAll((done) => {
   server.close()
   requestServer = request(app)
   // httpServer = http.createServer().listen();
   // httpServerAddr = httpServer.listen().address();
   // ioServer = ioBack(httpServer);
   done()
})

afterAll((done) => {
   server.close()
   // console.log('END SOCKETS TEST')
   done()
})

describe('SERVER IS WORKING', () => {
   test('GET: Responds to /', async () => {
      const res = await requestServer.get('/')
      expect(res.header['content-type']).toBe('text/html; charset=utf-8')
      expect(res.statusCode).toBe(200)
      expect(res.text).toEqual('<h1>SERVIDOR OK !</h1>')
   })
   test('GET: Responds to /conectar', async () => {
      const res = await requestServer.get('/conectar')
      expect(res.header['content-type']).toBe('text/html; charset=utf-8')
      expect(res.statusCode).toBe(200)
      expect(res.text).toEqual('<h1>Conectado</h1>')
   })
   test('GET: Responds to /desconectar', async () => {
      const res = await requestServer.get('/desconectar')
      expect(res.header['content-type']).toBe('text/html; charset=utf-8')
      expect(res.statusCode).toBe(200)
      expect(res.text).toEqual('<h1>Desconectado</h1>')
   })
})

describe('SERVER LISTENING IN PORT', () => {
   test('Start SERVER', async () => {
      const port = 3001
      await startServer(port, true)
      expect(server).toBeDefined()
      expect(server.address().port).toBe(port)
   })
})