const http    = require('http');
const express = require('express');
const app     = express();
const path    = require('path');
const port    = process.env.PORT || 3001;

app.use(express.static('public'));

app.locals.title = 'Watercooler';

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const server = http.createServer(app)
                   .listen(port, () => {
                     console.log(`Listening on port ${port}.`);
                   });

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  io.emit('usersConnected', io.engine.clientsCount);

  socket.on('disconnect', () => {
    io.emit('usersConnected', io.engine.clientsCount);
  });

  socket.on('newMessage', message => {
    socket.broadcast.emit('message', message)
  })

  socket.on('userTyping', socket_id => {
    socket.broadcast.emit('userTyping', socket_id)
  })
});

module.exports = server;