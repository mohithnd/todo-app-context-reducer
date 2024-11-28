import { createContext, useReducer } from "react";

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
          },
        ],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    default:
      return { ...state };
  }
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: ADD_TODO, payload: text });
  };

  const updateTodo = (id, updatedText) => {
    dispatch({ type: UPDATE_TODO, payload: { id, text: updatedText } });
  };

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, updateTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
