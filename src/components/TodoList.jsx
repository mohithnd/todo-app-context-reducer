import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
