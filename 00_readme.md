# React, Node y PostgreSQL (PERN Stack) con Material UI

## Herramientas
- se nesesita instalar nodejs
- se necesita instalar postgresql password: admin

## conceptos backend
- /src es nuestro codigo
- /routes define urls o endpoint q pedimos desde el front
- /controllers es el codigo q se ejecuta cuando una url sea visitada

- src/index.js es el archivo q arranca el servidor
- config.js guarda variables de configuracion del proyecto backend
- db.js guarda la conexion a la base de datos
- "start": "node src/index.js" se agrego esta linea en package.json para que funcione npm start
- "dev": "nodemon src/index.js" se agrego esta linea en package.json para que corra el proyecto con nodemon y funcione npm run dev

## desde cmd desde la carpeta de backend /pern-stack
- `npm init -y` crea el archivo package.json
- `npm i express morgan cors` quedan en el package.json
instala express es el framework de backend, 
instala morgan es para ver por consola las peticiones
instala cors es para poder comunicar dos servidores en dos dominios distintos
- `npm i nodemon -D`
instala nodemon para Desarrollo para ver cambios sin tener q reiniciar
- `npm i pg` modulo para conectar el backend con postgresql
- `npm start` para correr el server
- `npm i dotenv` para que el proyecto soporte variables de entorno q estan en el .env

## conceptos front
- /components  carpeta que guarda piezas de interfaz reutilizables

## desde la consola desde la carpeta front /client
- `npx create-react-app client` crea el proyecto front de react
- `npm i react-router-dom` modulo para las rutas 
- `npm install @mui/material @emotion/react @emotion/styled` instala material UI
- `npm install @mui/icons-material` instala los iconos de MUI

## para iniciar el proyecto en carpeta backend /pern-stack
- `npm run dev` para correr el server escuchando cambios con nodemon se ejecuta en http://localhost:4000/ en postman

## para iniciar el proyecto en carpeta front /client
- `npm start` para correr el proyecto front en http://localhost:3000/ en el navegador
