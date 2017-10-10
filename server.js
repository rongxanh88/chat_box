const http    = require('http');
const cors    = require('cors');
const express = require('express');
const app     = express();
const path    = require('path');
const port    = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.locals.title = 'Watercooler';

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
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