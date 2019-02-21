'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3001;

app.use(morgan('common'));

app.get('*', (req, res) => {
    res.json({message: 'Page not found'})
});

app.listen(port, () => {
    console.log(`Your app is listening on port: ${port}`);
})