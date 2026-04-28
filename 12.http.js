const http = require('http');
const server = http.createServer((req, res) => {
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url === '/'){
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        return res.end('Here is our short history')
    }
    res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back Home</a>`
    )
})

server.listen(5000)

// -------------------
// Lodash is a JavaScript library that provides ready-made helper functions for common tasks like working with arrays, objects, and data.
// It helps you write shorter, cleaner, and more reliable code instead of implementing everything from scratch.

const _ = require('lodash')
const items = [1, [2,[3, [4]]]]
const newItems = _.flattenDeep(items)
// _.flattenDeep() = convert nested array → single flat array
console.log(newItems);
console.log(`Hello People Again`);

// ----------------------
const http = require('http')
const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('hello wwworld')
})
server.listen(5000, () =>{
    console.log('Server listening on port : 5000...');  
})
