const {
  handleCreateTask,
  handleGetTasks,
  handleUpdateTask,
  handleDeleteTask
} = require('../controllers/taskController');

function taskRoutes(req, res) {
  const { method, url } = req;

  if (url === '/tasks' && method === 'POST') {
    return handleCreateTask(req, res);
  }

  if (url === '/tasks' && method === 'GET') {
    return handleGetTasks(req, res);
  }

  if (url.startsWith('/tasks/') && method === 'PUT') {
    const id = parseInt(url.split('/')[2]);
    return handleUpdateTask(req, res, id);
  }

  if (url.startsWith('/tasks/') && method === 'DELETE') {
    const id = parseInt(url.split('/')[2]);
    return handleDeleteTask(req, res, id);
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Rota não encontrada' }));
}

module.exports = taskRoutes;