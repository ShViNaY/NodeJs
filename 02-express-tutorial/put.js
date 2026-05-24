const express = require('express')
const app = express()

app.use(express.json())

let users = [
  { id: 1, name: 'Vinay' }
]

app.put('/users/:id', (req, res) => {

  const userID = Number(req.params.id)

  const newName = req.body.name

  const user = users.find((user) => user.id === userID)

  if (user) {
    user.name = newName
    res.send('User updated')
  } else {
    res.send('User not found')
  }
})

app.listen(5000)