// Імпортувати express
const express = require('express');
const volleyball = require('volleyball');
const todosRouter = require('./routes/todos');
const app = express();
app.use(volleyball);
app.use(express.json());
require('dotenv').config();
app.use('/api/v1/todos', todosRouter);
// Імпортувати роутер завдань

// Створити express програму

// Налаштувати парсинг json для express

// Підключити по правильному базовому url роутер завдань

// Експортувати express програму

module.exports = app;
