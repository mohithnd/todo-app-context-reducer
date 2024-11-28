import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-center text-xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
