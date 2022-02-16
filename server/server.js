const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || process.env.SERVER_PORT;
const app = express();
const{roster, bio, questionsList, startQuiz ,nextQuestion, results, yourBio, deleteChar, changeName} = require('./controller.js');
const {seed} = require('./seed.js');

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use(express.json());
app.use(cors());

app.use('/js', express.static(path.join(__dirname, '../client/main.js')))


app.post('/seed', seed);

app.get('/api/characters', roster);
app.post('/api/character-bio', bio);
app.get('/api/questions', questionsList);
app.get('/api/quiz', startQuiz);
app.get('/api/next', nextQuestion);
app.get('/api/results', results);
app.post('/api/your-character-bio', yourBio);
app.delete('/api/:name', deleteChar);
app.put('/api/:name', changeName);


app.listen(4040, () => console.log(`Server is running on port ${port}`));