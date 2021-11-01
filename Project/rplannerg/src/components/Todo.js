import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
// icons don't work for some reason !! fix please
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <i
          class="far fa-arrow-alt-circle-right"
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        ></i>
        <i
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        ></i>
      </div>
    </div>
  ));
};

export default Todo;
