const app = express();
app.get('/', (req, res) => {
res.send('Hello World');
});

const express = require('express');

app.listen(8080, '0.0.0.0');
console.log('Running on http://0.0.0.0:8080');
