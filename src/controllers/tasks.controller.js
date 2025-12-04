const pool = require('../db');

const getAlltasks = async (req, res, next) => {
    try {
        const alltasks = await pool.query('SELECT * FROM task');
        res.send(alltasks.rows);
    } catch (error) {
        // se ejecuta la funcion next q esta en el index.js
        next(error);
    }
}

const getTask = async (req, res, next) => {
    try {
        // desde req.params extrae el id
        const { id } = req.params;
        // pool para la consulta a la db
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createTask = async (req, res, next) => {
    // obtenemos los datos del body
    const { title, description } = req.body;
    try {
        // .query realiza la consulta a la db
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        res.send(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM task WHERE id = $1', [id])
        if (result.rowCount === 0) return res.status(404).json({
            message: "Task not found"
        })
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        })
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

//  exporta un objeto con las funciones
module.exports = {
    getAlltasks: getAlltasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}