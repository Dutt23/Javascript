const cluster = require('cluster')
process.env.UV_THREADPOOL_SIZE = 2

if (cluster.isMaster) {
  // Cause index.js to be executed again but in child mode
  cluster.fork();
  cluster.fork();
}
else {

  // Child process,
  // Going to serve request
  const express = require('express')
  const crypto = require('crypto')
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
    }
  }
  app.get('/', (req, res) => {
    console.log(process.env.UV_THREADPOOL_SIZE)
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
      res.send('Hi there');
    })
  })

  app.get('/fast', (req, res) => {
    res.send('That was fast');
  })

  app.listen(3000)
}