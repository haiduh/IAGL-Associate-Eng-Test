import axios from "axios";
import { FETCH_TODOS } from "./types"; 

export function fetchTodos() {
  return function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodos(task) {
  return function (dispatch) {
    return axios.post("http://localhost:9091/api/todo", { task })
      .then(({ data }) => {
        dispatch(setTodos(data));
      });
  };
}

export function removeTodos(task) {
  return function (dispatch) {
    return axios.delete("http://localhost:9091/api/todo", { data: { task } })
      .then(({ data }) => {
        dispatch(setTodos(data));
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}
