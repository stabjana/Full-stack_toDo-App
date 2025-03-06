import { RequestHandler } from 'express';
import Todo, { TodoModel }  from '../models/todo';
import { get, request } from 'http';

/* const TODOS: Todo[] = []; */
export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    console.log('Data', data);
    let todos = await Todo.create(data);
     res
      .status(200)
      .json({ message: 'Todo created sucessfully', data: todos });
  } catch (error: any) {
     res.status(500).json({ message: error.message });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const data: TodoModel = req.body;
    let updatedToDO = await Todo.findByIdAndUpdate(todoId, data, { new: true });
      res.status(200).json(updatedToDO);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    let todos = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: 'Todo deleted!' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
