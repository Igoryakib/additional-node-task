const {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  updateTodoCompleted,
} = require("../db/todos");

const getTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, Not found",
    });
  }
};

const postTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await createTodo(text);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(404).json({
      message: `Something went wrong, ${error}`,
    });
  }
};

const getTodoId = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Contact with id ${todoId} not found` });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong, ${error}`,
    });
  }
};

const changeTodo = async (req, res) => {
  const { todoId } = req.params;
  const { text } = req.body;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Contact with id ${todoId} not found` });
    }
    const updatedTodo = await updateTodo(todoId, text);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong, ${error}`,
    });
  }
};

const removeTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Contact with id ${todoId} not found` });
    }
    await deleteTodo(todoId);
    res.json({
      message: "todo deleted",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong, ${error}`,
    });
  }
};

const changeTodoCompleted = async (req, res) => {
  const { todoId } = req.params;
  const { completed } = req.body;
  try {
    const todo = await getTodoById(todoId);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Contact with id ${todoId} not found` });
    }
    const updatedTodo = await updateTodoCompleted(todoId, completed);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong, ${error}`,
    });
  }
};

module.exports = {
  getTodos,
  postTodo,
  getTodoId,
  changeTodo,
  removeTodo,
  changeTodoCompleted,
};
