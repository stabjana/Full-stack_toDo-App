"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
/* const TODOS: Todo[] = []; */
const createTodo = async (req, res, next) => {
    try {
        const data = req.body;
        console.log('Data', data);
        let todos = await todo_1.default.create(data);
        res
            .status(200)
            .json({ message: 'Todo created sucessfully', data: todos });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    try {
        const todos = await todo_1.default.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getTodos = getTodos;
const updateTodo = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const data = req.body;
        let updatedToDO = await todo_1.default.findByIdAndUpdate(todoId, data, { new: true });
        res.status(200).json(updatedToDO);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        let todos = await todo_1.default.findByIdAndDelete(todoId);
        res.status(200).json({ message: 'Todo deleted!' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteTodo = deleteTodo;
