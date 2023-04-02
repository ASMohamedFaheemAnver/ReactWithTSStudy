import { SingleTodo } from "./SingleTodo";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} />;
      })}
    </div>
  );
};
export default TodoList;
