const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo', async (req, res) => { //addTodo functionality
  const { task } = req.body;
  const todos = await todoService.addTodo(task);
  res.status(201).json(todos);
});

  server.delete('/api/todo', async (req, res) => { //remove button functionality
  try {
    const { task } = req.body;
    await todoService.removeTodo(task); 
    const updatedTodos = await todoService.getTodos();
    res.json(updatedTodos); //sends back updated list without needing a refresh
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;