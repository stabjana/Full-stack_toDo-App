import React, { useState } from "react";
import axios from "axios";
import TodoList from "./Components/ToDoList";
import TodoForm from "./Components/ToDoForm";
interface Todo {
  _id: string;
  title: string;
  description: string;
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = async (todo: { title: string; description: string }) => {
    const response = await axios.post("http://localhost:3001/todos", todo);
    setTodos([...todos, response.data]);
  };
  return (
    <div>
      {" "}
      <h1>Todo List</h1> <TodoForm addTodo={addTodo} />{" "}
      <TodoList todos={todos} />{" "}
    </div>
  );
};
export default App;
