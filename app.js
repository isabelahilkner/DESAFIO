const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const server = http.createServer((req, res) => {
  taskRoutes(req, res);
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});