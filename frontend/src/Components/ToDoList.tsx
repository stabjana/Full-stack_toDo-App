import React from 'react';

interface ToDo {
    _id:string;
    title:string;
    description:string;
}

interface ToDoListProps {
    todos: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({todos}) => {
    return(
        <ul>
            {todos.map((todo) => (
                <li key={todo._id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;