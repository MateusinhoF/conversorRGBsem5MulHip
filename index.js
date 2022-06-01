const express = require('express');
const app = express();
//const router = express.Router();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const router = require('./routes');

app.engine('handlebars', handlebars.engine({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

app.use('/', router);
app.listen(process.env.port || 3000);