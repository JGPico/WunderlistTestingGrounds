const express = require('express');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const listsRouter = require('./lists/list-router.js');
const authentication = require('./auth/authenticator.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authentication, usersRouter);
server.use('/api/lists', authentication, listsRouter);

server.get('/', (req, res) => {
    res.json({Message: "The API is up!"});
});

module.exports = server;