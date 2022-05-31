const CronJob = require('cron/lib/job')
const { server } = require('./app')

const startServer = async (port) => {
   server.listen(port, () => {
      console.log('>> Listening on *:4000')
   })
}

startServer(4000)


  

module.exports = { startServer }

