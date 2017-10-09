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

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

module.exports = server;