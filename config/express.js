const express = require('express');

module.exports = function () {
    const app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use('/node', express.static('./node_modules'));

    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    // require('../app/routes/dashboard.server.routes.js')(app);
    return app;
};
