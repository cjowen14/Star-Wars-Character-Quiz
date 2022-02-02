const express = require('express');
const cors = require('cors');

const{roster, bio, questionsList, startQuiz ,nextQuestion} = require('./controller.js');

const app = express();
app.use(express.json());
app.use(cors());


app.get('/api/characters', roster);
app.post('/api/character-bio', bio);
app.get('/api/questions', questionsList);
app.get('/api/quiz', startQuiz);
app.get('/api/next', nextQuestion)


app.listen(4040, () => console.log(`Server is running on port 4040`));