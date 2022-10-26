const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())

// const categories = require('./Data/categorys.json');
const course = require('./Data/course.json');


app.get('/', (req, res) => {
    res.send('Learn will bd API Running');
});

app.get('/course-category', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.id == id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Learn will bd server running on port', port);

});