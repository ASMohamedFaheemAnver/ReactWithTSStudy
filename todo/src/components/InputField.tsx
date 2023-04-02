import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: (event: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, onAddTodo }: Props) => {
  return (
    <form onSubmit={onAddTodo} className="input">
      <input
        value={todo}
        type="input"
        placeholder="Enter a task"
        className="input-box"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button className="input-submit">Go</button>
    </form>
  );
};
