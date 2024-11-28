import { useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    addTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
        className="border border-gray-300 rounded-l-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
