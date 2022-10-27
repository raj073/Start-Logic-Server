const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const course = require('./data/courseDetails.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Start Logic Platform is Running.');
});


app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = course.find(n => n.course_id === id);
    res.send(courseDetails)
})


app.listen(port, () => {
    console.log('Distance Learning Platform Server Running on PORT:', port)
})