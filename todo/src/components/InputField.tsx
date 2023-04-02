import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: (event: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  onAddTodo,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        inputRef.current?.blur();
        onAddTodo(e);
      }}
      className="input"
    >
      <input
        ref={inputRef}
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
