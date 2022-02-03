require('dotenv').config();

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

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE questions(
            question_id SERIAL PRIMARY KEY,
            question VARCHAR(100),
            answer1 VARCHAR(50),
            answer2 VARCHAR(50),
            answer3 VARCHAR(50),
            answer4 VARCHAR(50),
            image1 TEXT,
            image2 TEXT,
            image3 TEXT,
            image4 TEXT
        );

        INSERT INTO questions(question, answer1, answer2, answer3, answer4, image1, image2, image3, image4)
        VALUES('What planet would you like to visit on vacation?', 'Coruscant', 'Naboo', 'Kashyyyk', 'Takodana', '../images/Coruscant.png', '../images/Naboo.png', '../images/Kashyyyk.jpg', '../images/Takodana.jpeg'),
              ('Which quality is most important to you?', 'Bravery', 'Friendship', 'Power', 'Loyalty', '../images/Bravery.jpg', '../images/Friendship.jpg', '../images/Power.jpg', '../images/Loyalty.jpg'),
              ('What is your favorite color?', 'Blue', 'Red', 'Purple', 'Yellow', '../images/Blue.png', '../images/Red.png', '../images/Purple.png', '../images/Yellow.png'),
              ('Which droid would you choose?', 'R2-D2', 'BB-8', 'C-3PO', 'BD-1', '../images/R2.jpg', '../images/BB8.jpg', '../images/3PO.jpg', '../images/BD1.jpg');

        INSERT INTO characters(name, planet, hair, image, weapon, birthday, movie, height, vehicle, result)
        VALUES('Darth Vader', 'Tatooine', 'None', '../images/Vader.jpg', 'Red Lightsaber', '42 BBY', 'The Empire Strikes Back', '6ft 8in', 'Devastator', 'Darth Vader is the dark Lord of the Sith! He seeks ultimate power and is only superseded by his master, Emperor Palpatine. Once a versatile warrior in the Clone Wars, Vader has since adopted his style to be more tactical, precise, and of course full of power. The galaxy fears Vader for his tenacity, intimidation, and not knowing who exactly is behind the mask. He feeds off of this fear and it only makes him stronger.'),
              ('Obi-Wan Kenobi', 'Stewjon', 'Auburn', '../images/Kenobi.png', 'Blue Lightsaber', '57 BBY', 'Revenge of the Sith', '5ft 11in', 'Venator-class Star Destroyer', 'Obi-Wan is a stalwart Jedi who sticks to the code and strives to maintain peace before violence. If provoked to violence, he is a skilled fighter who uses finesse more than athleticism to defeat his opponents. He was a respected leader during the Clone Wars, one who many clones and Jedi relied on for important missions and duties. He is well liked and can connect with almost anyone with is easy going personality.'),
              ('Rey Skywalker', 'Jakku', 'Brown', '../images/Rey.jpg', 'Blue/Yellow Lightsaber', '15 ABY', 'The Rise of Skywalker', '5ft 5in', 'Millennium Falcon', 'Born from a lineage of evil, Rey took a much different approach to her abilities with the Force when compared to her grandfather. She is caring, compassionate, and is always willing to do what is best for her friends. She is a quick learner and revered by the Resistance for her bravery during their fight against  the First Order, despite her inexperience. She is the future of the Jedi Order and many people are willing to follow her leadership.'),
              ('Jar Jar Binks', 'Naboo', 'None', '../images/JarJar.jpg', 'Nope', '52 BBY', 'The Phantom Menace', '6ft 5in', 'Wherever he is welcomed', 'Once banished by his Gungan people, Jar Jar became somewhat of a hero during the Republics fight against the Separatist army. Often seen as clumsy and unintelligent, Jar Jar tends to surprise a lot of people with his skills and knowledge, even though some of that may be on accident. He has gained a lot of respect since working with the Republic and that has lot to do with his fun-loving look at life where he is just wanting to find joy.'),
              ('Yoda', 'Unknown', 'Green', '../images/Yoda.jpg', 'Green Lightsaber', '896 BBY', 'The Empire Strikes Back', '2ft 2in', 'Acclamator-class transport', 'Having trained many generations of Jedi, Yoda is seen as one of the wisest beings in the galaxy. While he may in his elder years, he enjoys passing on his knowledge to the future generations in order to maintain peace across the galaxy. When necessary he is a skilled warrior, despite his size. Unlike most older generation Force users, Yoda relies on his athleticism to aid him in combat. He is also quick witted and can lighten the mood when things get tense.'),
              ('Boba Fett', 'Kamino', 'N/A', '../images/Boba.jpg', 'EE-3 Blaster', '32 BBY', 'Return of the Jedi', '6ft 0in', 'Slave 1', 'Despite being respected among scum and villainy throughout the empire, Boba Fett has a lot of compassion towards his fellow beings. He is well suited for combat and has an array of gadgets to ensure his victory, so much that the Sarlac Pit couldn not contain him. Once a bounty hunter solely in it for the money, he now looks to ensure peace in his domain on Tatooine. He used to be a loner but has come out of his shell a little bit to accept help from friends.');
        `)
    }
}