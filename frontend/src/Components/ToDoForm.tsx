import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: { title: string; description: string }) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <button type="submit">Add Todo</button>{" "}
    </form>
  );
};
export default TodoForm;
