const { createTask } = require('../models/taskModel');

let tasks = [];
let idCounter = 1;

// Criar
const addTask = (title, completed = false) => {
  const task = createTask(idCounter++, title, completed ?? false);
  tasks.push(task);
  return task;
};

// Listar
const getTasks = () => tasks;

// Atualizar
const updateTask = (id, title, completed) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  return task;
};

// Deletar
const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  addTask,
  getTasks,
  updateTask,
  deleteTask
};
