const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    console.log('User hit the resource')
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send
})

app.listen(5000, () => {
    console.log('Server is listening on port : 5000');
})

