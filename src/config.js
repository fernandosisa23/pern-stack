const { config } = require('dotenv');

// ejecuta config para q se puedan leer variables de entorno
config();

// exporta este objeto con las variables de configuracion
module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    }
}