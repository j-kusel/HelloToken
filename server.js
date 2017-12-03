const configExpress = require('./config/express');

const app = configExpress();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
