const startQuiz = document.querySelector('#start');
const mainBody = document.querySelector('#main-body');
const charBody = document.querySelector('#char-body');
const charButton = document.querySelector('#chars');
const questionsList = document.querySelector('#questions-list')

//display roster of characters
function roster(){
    axios
    .get("http://localhost:4040/api/characters")
    .then(function(res) {
        const data = res.data;
        mainBody.innerHTML = `<h2 id="roster-header">Character Roster!</h2>`;
        for(let i = 0; i< data.length; i++){
            if(i<=2){
                mainBody.innerHTML = 
                `<section id="first-row">
                ${mainBody.innerHTML}
                <div class="character">
                    <img 
                        class="char-pic"
                        src = ${data[i].image}
                        alt="">
                <div class="break"></div>
                <h3 class="bio">${data[i].name}</h3>
            </div>
            </section>`
            }
            else if(i<=5){
                mainBody.innerHTML = `<section id="second-row">
            ${mainBody.innerHTML}
             <div class="character">
                <img 
                    class="char-pic"
                    src = ${data[i].image}
                    alt="">
                <div class="break"></div>
                <h3 class="bio">${data[i].name}</h3>
            </div>
            </section>`
            }   
    }

    //allow for user to click on a character to view their bio page
    const bioButton = document.querySelectorAll('.char-pic');
    console.log(bioButton);
    for(let i = 0; i < bioButton.length; i++){
       bioButton[i].addEventListener('click', function(){
           bio(i);
       });
       }
})
}

//get full bio for selected character
function bio(id){
    let bodyObj = {
        id
    }
    axios
    .post('http://localhost:4040/api/character-bio', bodyObj)
    .then(function(res){
        const data = res.data;
        console.log(data);
    mainBody.innerHTML = 
        `<section id="bio-pic">
            <img src="${data.image}" id="the-pic" alt="">
        </section>
        <section id="bio-info">
            <h2 class="bio">Name:</h2> <h3 class="bio">${data.name}</h3>
            <div class="break"></div>
            <h2 class="bio">Homeworld:</h2> <h3 class="bio">${data.planet}</h3>
            <div class="break"></div>
            <h2 class="bio">Hair Color:</h2> <h3 class="bio">${data.hair}</h3>
            <div class="break"></div>
            <h2 class="bio">Weapon:</h2> <h3 class="bio">${data.weapon}</h3>
            <div class="break"></div>
            <h2 class="bio">Birth Year:</h2> <h3 class="bio">${data.birthday}</h3>
            <div class="break"></div>
            <h2 class="bio">Most Famous Movie:</h2> <h3 class="bio">${data.movie}</h3> 
            <div class="break"></div>
            <h2 class="bio">Height:</h2> <h3 class="bio">${data.height}</h3> 
            <div class="break"></div>
            <h2 class="bio">Vehicle:</h2> <h3 class="bio">${data.vehicle}</h3> 
        </section>`
    })
}

//show list of possible questions
function listQuestions(){
    axios
    .get('http://localhost:4040/api/questions')
    .then(function(res){
        const data = res.data;
        mainBody.innerHTML = 
            `<section id="question-section">
                <h2 id="ques">What planet would you like to visit on vacation?</h2>
                <h2 id="ques">Which quality is most important to you?</h2>
                <h2 id="ques">What is your favorite color?</h2>
                <h2 id="ques">Which droid would you choose?</h2>
            </section>`
    })
}

let index = 0;
let newCount = 0;

//create quiz card for each question
function createQuizCard(data){
        //run for all questions except for the last
        if(question <4){
            mainBody.innerHTML = `
                <section class="quiz-card">
                    <h1 id="question-heading">${data[index].title}</h1>
                    <div class="answer-box">
                        <img src="${data[index].image1}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer1}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image2}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer2}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image3}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer3}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image4}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer4}</h2>
                    </div>
                    <button id="next">NEXT</button>
                </section>`
            //determine which choice was selected by user, highlight choice, send choice to counter function
            let choice = document.querySelectorAll(".answer-pic");
            for(let i = 0; i < choice.length; i++){
                choice[i].addEventListener('click', function(){
                choice[i].classList.add('selected');
                counter(i);
            })
        
            }
            //set up for when user clicks the next button after answering the question
            let nextQuestion = document.querySelector('#next');
            index++;
            nextQuestion.addEventListener('click', next);
        }
        //run for the last question
        else{
            mainBody.innerHTML = `
                <section class="quiz-card">
                    <h1 id="question-heading">${data[index].title}</h1>
                    <div class="answer-box">
                        <img src="${data[index].image1}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer1}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image2}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer2}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image3}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer3}</h2>
                    </div>
                    <div class="answer-box">
                        <img src="${data[index].image4}" class ="answer-pic" alt="">
                        <h2 class="answer-text">${data[index].answer4}</h2>
                    </div>
                    <button id="final">FINISH</button>
                </section>`
            let choice = document.querySelectorAll(".answer-pic");
            for(let i = 0; i < choice.length; i++){
                choice[i].addEventListener('click', function(){
                choice[i].classList.add('selected');
                counter(i);
            })
        
            }
            let finalQuestion = document.querySelector('#final');
            index++;
            finalQuestion.addEventListener('click', roster); //will display character that was generated
    }
        
}

//start quiz and advance to next question
function quizStart(){
    axios
    .get('http://localhost:4040/api/quiz')
    .then(function(res){
        const data = res.data;
         createQuizCard(data);
    })
}

//get character info again, store counters for each character, advance to next question card
function next(){
    axios
    .get('http://localhost:4040/api/next')
    .then(function(res){
        const data = res.data;
        console.log("next clicked");
        question++;
        console.log(question);
        finalVader+=vaderCount;
        finalKenobi+=kenobiCount;
        finalRey+=reyCount;
        finalYoda+=yodaCount;
        finalJar+=jarCount;
        finalBoba+=bobaCount;
        // console.log('Total Vader: ' + finalVader);
        // console.log('Total Yoda: ' + finalYoda);
        // console.log('Total Rey: ' + finalRey);
        // console.log('Total Kenobi: ' + finalKenobi);
        // console.log('Total Jar Jar: ' + finalJar);
        // console.log('Total Boba: ' + finalBoba);
        createQuizCard(data);
    })
}

//establish variables for the counter
let question = 1;
let vaderCount = 0;
let kenobiCount = 0;
let reyCount = 0;
let yodaCount = 0;
let jarCount = 0;
let bobaCount = 0;
let finalVader = 0;
let finalKenobi = 0;
let finalRey = 0;
let finalYoda = 0;
let finalJar = 0;
let finalBoba = 0;


//count how many choices a user has selected for each character
function counter(i){
    //make selected styling disappear if another option is selected before moving to next question
    let choice = document.querySelectorAll(".answer-pic");
    for(let j = 0; j < choice.length; j++){
        if(j !== i){
            choice[j].classList.remove('selected');
        }
    }
    //Question 1
    if(question === 1){
        //First answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            vaderCount++;
            yodaCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            kenobiCount++;
            jarCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            reyCount++;
            bobaCount++;
            jarCount++;
            yodaCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            bobaCount++;
            reyCount++;
        }
    }
    //Question 2
    else if(question === 2){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            kenobiCount++;
            reyCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            yodaCount++;
            reyCount++;
            jarCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            vaderCount++;
            bobaCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            jarCount++;
        }
    }
    //Question 3
    else if(question === 3){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            kenobiCount++;
            yodaCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            vaderCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            bobaCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            jarCount++;
            reyCount++;
        }
    }
    //Question 4
    else if(question === 4){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            kenobiCount++;
            yodaCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            reyCount++;
            jarCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            vaderCount++;
            bobaCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            reyCount++;
        }
    }
    
}

startQuiz.addEventListener('click', quizStart);
charButton.addEventListener('click', roster);
questionsList.addEventListener('click', listQuestions);