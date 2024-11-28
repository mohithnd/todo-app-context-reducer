import { useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoItem = ({ todo }) => {
  const { updateTodo, removeTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white p-4 shadow-md mb-2 rounded-md">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border border-gray-300 rounded-md p-2 flex-grow mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition duration-200"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <span className="flex-grow">{todo.text}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white rounded-md p-2 hover:bg-yellow-600 transition duration-200 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
