const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/course.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Start Logic Platform is Running.');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})


app.listen(port, () => {
    console.log('Dragon News Portal Server Running on PORT:', port)
})