import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo, onRemove }) => (
  <li className="todo-item">
    {todo.task}
    <button className="button-24" onClick={onRemove}>
      🗑️
    </button>
  </li>
);

// export default Todo;
export default connect(
  null
)(Todo);