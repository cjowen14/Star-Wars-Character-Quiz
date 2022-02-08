require("dotenv").config();

const {CONNECTION_STRING} = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions:{
        ssl: {
            rejectUnauthorized: false
        }
    }
})


const questions = require('./questions.json');
const characters = require('./chars.json');



module.exports = {
    roster: (req, res) => {
        sequelize.query(`SELECT * FROM characters;`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })
    },
    bio: (req, res) => {
        let index = req.body.id + 1;
        sequelize.query(`SELECT * FROM characters
                        WHERE char_id = ${index};`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
    },
    questionsList: (req, res) => {
        sequelize.query(`SELECT * FROM questions;`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })
    },

    startQuiz: (req, res) => {
        sequelize.query(`SELECT * FROM questions;`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })
    },
    nextQuestion: (req, res) =>{
        sequelize.query(`SELECT * FROM questions;`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })
    },
    results: (req, res) => {
        sequelize.query(`SELECT * FROM characters;`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        });
    },
    yourBio: (req, res) => {
        let image = req.body.image;
        console.log(image);
        sequelize.query(`SELECT * FROM characters
                        WHERE image = '${image}';`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })        
    },
    deleteChar: (req, res) => {
        let name = req.params.name;
        console.log(name);
        sequelize.query(`SELECT * FROM characters
                        WHERE name = '${name}';`)
        .then((dbResult) => {
            res.status(200).send(dbResult[0]);
        })
    },
    changeName: (req, res) =>  {
        let newName = req.body.newNameValue;
        res.status(200).send(newName);
    }
}

