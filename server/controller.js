const questions = require('./questions.json');
const characters = require('./chars.json');


module.exports = {
    roster: (req, res) => {
        res.status(200).send(characters);
    },
    bio: (req, res) => {
        let index = req.body;
        res.status(200).send(characters[index.id]);
    },
    questionsList: (req, res) => {
        res.status(200).send(questions);
    },

    startQuiz: (req, res) => {
        res.status(200).send(questions);
    },
    nextQuestion: (req, res) =>{
        res.status(200).send(questions);
    }
}

