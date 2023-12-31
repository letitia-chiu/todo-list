const express = require('express')
const app = express()

const { engine } = require('express-handlebars') 

const port = 3000

const db = require('./models')
const Todo = db.Todo

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/todos', (req, res) => {
  return Todo.findAll()
    .then((todos) => res.send({ todos }))
    .catch((err) => res.status(422).json(err))
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