const express    = require('express');
const path       = require('path');

const app        = express();

app.set('port', process.env.PORT || 3001);
app.use(express.static('public'));

app.locals.title = 'Watercooler';

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/client/public/index.html'));
});

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;