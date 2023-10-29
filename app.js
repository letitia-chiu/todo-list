const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/todos', (req, res) => {
  res.send('get all todos')
})

app.get('/todos/new', (req, res) => {
  res.send('page: add todos')
})

app.get('/todos/:id', (req, res) => {
  res.send(`get todo id: ${req.params.id}`)
})

app.get('/todos/:id/edit', (req, res) => {
  res.send(`page: edit todo id: ${req.params.id}`)
})

app.post('/todos', (req, res) => {
  res.send('add new todo')
})

app.put('/todos/:id', (req, res) => {
  res.send(`todo id: ${req.params.id} has been updated`)
})

app.delete('/todos/:id', (req, res) => {
  res.send(`todo id: ${req.params.id} has been deleted`)
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})