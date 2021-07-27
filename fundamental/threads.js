const crypto = require('crypto')

process.env.UV_THREADPOOL_SIZE = 8
const start = Date.now();

for(let i =0; i <10; i++){
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () =>{
    console.log(`${i} :`, Date.now() - start)
  })
}
