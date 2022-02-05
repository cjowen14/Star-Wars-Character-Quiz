require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const{SERVER_PORT} = process.env;
const {seed} = require('./seed.js');
const{roster, bio, questionsList, startQuiz ,nextQuestion, results, yourBio, deleteChar, changeName} = require('./controller.js');

app.use(express.json());
app.use(cors());

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


app.listen(4040, () => console.log(`Server is running on port 4040`));