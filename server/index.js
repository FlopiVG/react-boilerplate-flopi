const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(cors());

// CONTROLLERS
app.use('/api', require('./controllers'));

app.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
