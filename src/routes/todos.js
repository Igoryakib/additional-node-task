// Створити express роутер і додати окремі роути по завданні
const express = require('express');
const router = express.Router();
const {getTodos, postTodo, getTodoId, changeTodo, removeTodo, changeTodoCompleted} = require('../controllers/tasksController');
const todosSchemas = require('../validationSchemas/todos');
const schemaValidate = require('../middlewares/schemaValidate');

router.post('/', schemaValidate(todosSchemas.verifyData), postTodo);
router.get('/', getTodos);
router.get('/:todoId', getTodoId);
router.put('/:todoId', schemaValidate(todosSchemas.verifyData), changeTodo);
router.patch('/:todoId/completed', schemaValidate(todosSchemas.verifyCompleted), changeTodoCompleted);
router.delete('/:todoId', removeTodo);


module.exports = router;