const express = require('express');
const morgan = require('morgan');

const db = require('../src/database/db')

const app = express();

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit : '10mb', extended: true}))

db();

app.all('*', require('./routes/index'));

app.use(morgan('dev'))

app.get('/', (req, res) => {
    return res.send('')
})

app.listen(3000)
