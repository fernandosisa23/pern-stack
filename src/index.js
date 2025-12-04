const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const taskRoutes = require('./routes/tasks.routes');

const app = express();

// app usa cors para comunicar dos servidores distintos front y backend
app.use(cors());

// app usa morgan para ver por consola peticiones
app.use(morgan('dev'));

// para que la app pueda leer los body en formato json
app.use(express.json());

// app usa las rutas
app.use(taskRoutes);

// esta es la funcion next para manejar el error
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

// app escucha o usa el puerto 4000
app.listen(4000);

console.log('Server on port 4000');
