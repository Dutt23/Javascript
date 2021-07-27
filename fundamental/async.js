const https = require('https')

const start = Date.now();

// Pending os tasks
// Does not use thread pool
// tells operating system to make calls.
// So os decides whether to make new thread or not
function doRequest(){
  https.request('https://www.google.com', res => {
    res.on('data', () => { })
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end()
}

for(let i = 0; i <10; i++){
  doRequest()
}
