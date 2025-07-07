import React, { Component } from "react";
import Todo from "./Todo"; 
import { fetchTodos, addTodos, removeTodos } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    newTask: ""
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAdd = () => {
    const { newTask } = this.state;
    if (newTask.trim()) { //removes whitespace 
      this.props.addTodos(newTask);
      this.setState({ newTask: "" });
    }
  };

  render() {
    const { todos } = this.props.data;

    return (
      <div>
        <input
          className="txt-box"
          type="text"
          value={this.state.newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
        />
        <button className="add-btn" onClick={this.handleAdd}>
          Add
        </button>
        <ul className="todo-list">
          {todos && todos.length ? (
            todos.map((todo, index) => (
              <Todo
                key={`todo-${index}`}
                todo={todo}
                onRemove={() => this.props.removeTodos(todo.task)} // used for remove button in Todo.js
              />
            ))
          ) : (
            <li>No todos, yay!</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});

export default connect(mapStateToProps, {
  fetchTodos,
  addTodos,
  removeTodos,
})(TodoList);
