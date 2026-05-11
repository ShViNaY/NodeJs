const express = require('express')
const app = express()

app.get('/products', (req, res) => {
    const search = req.query.search

    res.send(`Searching for: ${search}`)
})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})


// URL : http://localhost:5000/products?search=phone
// OUTPUT : Searching for: phone
