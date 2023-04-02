import React from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, setTodos }) => {
  const onTodoDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, done: !prevTodo.done };
        }
        return prevTodo;
      })
    );
  };

  const onTodoDelete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => {
        if (prevTodo.id === id) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <form className="todos-single">
      {todo.done ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => onTodoDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => onTodoDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
