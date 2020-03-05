const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./models/todo');

const app = express();

mongoose.connect('mongodb://localhost:27020/todo-app-redux',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, () => {
    console.log('connected to MongoDB')
  }
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from Node server');
});

app.get('/api/todos', (req, res) => {
  Todo.find({}, (err, record) => {
    console.log(record);
    if (err) {
      res.send(err)
    } else {
      res.json(record);
    }
  })
});

app.post('/api/todos', (req, res) => {
  const record = new Todo();
  record.text = req.body.text;

  record.save((err, record) => {
    if (err) {
      res.send.err(err);
    } else {
      res.json(record);
    }
  })
});


app.listen(8080, () => {
  console.log('Express is listening on 8080');
});