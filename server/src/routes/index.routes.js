const { Router } = require('express')
const rt = Router()

rt.get('/', (req, res) => {
   res.send('<h1>SERVIDOR OK !</h1>')
})



module.exports = rt