const createTask = (id, title, completed = false) => {
  return {
    id: id,
    title: title,
    completed: completed,
  };
};

module.exports = { createTask};
