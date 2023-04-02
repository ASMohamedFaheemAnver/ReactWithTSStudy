import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedToDo, setEditedToDo] = useState(todo.todo);

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

  // https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value
  const onEditedTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedToDo(e.target.value);
  };

  const onEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, todo: editedToDo };
        }
        return prevTodo;
      })
    );
    setEdit(false);
  };

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="todos-single" onSubmit={(e) => onEditTodo(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos-single-text"
          value={editedToDo}
          onChange={onEditedTodoChange}
        />
      ) : todo.done ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => setEdit((prevState) => !prevState)}
        >
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
