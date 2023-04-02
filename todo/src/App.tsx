import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

// React functional component
const App: React.FC = () => {
  // let str: string;
  // let num: number;
  // let loading: boolean;
  // let hobbies: string[];
  // let role: [number, string];
  // type Person = {
  //   name: string;
  //   age: number;
  // };
  // type Member = Person & {
  //   password: string;
  // };
  // let person: Object;
  // let personWTs: Person;
  // let peoplesWTs: Person[];
  // let numOrStr: number | string;
  // let printStr: (str: string) => void;
  // printStr = (str) => {
  //   console.log({ component: App.name, str });
  // };
  // let person: unknown; // Or any

  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // interface Member extends Person {
  //   password: string;
  // }

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    setTodo("");
    setTodos((prevState) => [
      ...prevState,
      { todo, id: Math.random(), done: false },
    ]);
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} onAddTodo={onAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
