let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  addTodo: (task) => { 
    const newTodo = { task };
    todoList.todos.push(newTodo);
    return Promise.resolve(todoList); 
  },
  
  removeTodo: (task) => { 
    todoList.todos = todoList.todos.filter(todo => todo.task !== task);
    return Promise.resolve(todoList); 
  }
};
