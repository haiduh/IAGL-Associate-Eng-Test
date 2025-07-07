const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },

    addTodo: async (task) => {
      await repository.addTodo(task);
      return await repository.getTodos();
    },

    removeTodo: async (task) => {
      await repository.removeTodo(task);
      return await repository.getTodos();
    }
  };
};

module.exports = todoService;