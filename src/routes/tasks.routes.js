// define las routas que el front puede utilizar
const { Router } = require('express');
const { getAlltasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller');

const router = Router();

// route de get tasks, ejecuta la funcion q viene del controller
// http://localhost:4000/tasks   en su metodo get con postman
router.get('/tasks', getAlltasks);

// route de get task by Id
router.get('/tasks/:id', getTask);

// route create a task
router.post('/tasks', createTask)

// route delete a task
router.delete('/tasks/:id', deleteTask);

// update a task
router.put('/tasks/:id', updateTask);

module.exports = router;