const mainBody = document.querySelector('#main-body');
const charBody = document.querySelector('#char-body');
const charButton = document.querySelector('#chars');
const questionsList = document.querySelector('#questions-list');
const yourCharBody = document.querySelector('#yourChar-body');
const homeBtn = document.querySelector('#title');
const logoBtn = document.querySelector('#logo');
const startQuiz = document.querySelector('#start');
const yourBtn = document.querySelector('#your-characters');
let index = 0;
let newCount = 0;
//establish variables for the counter
let question = 1;
let vaderCount = 0;
let kenobiCount = 0;
let reyCount = 0;
let yodaCount = 0;
let jarCount = 0;
let bobaCount = 0;
let ahsokaCount = 0;
let hanCount = 0;
let maulCount = 0;
let kyloCount = 0;
let mandoCount = 0;
let padmeCount = 0;
let finalAhsoka = 0;
let finalHan = 0;
let finalMaul = 0;
let finalKylo = 0;
let finalMando = 0;
let finalPadme = 0;
let finalVader = 0;
let finalKenobi = 0;
let finalRey = 0;
let finalYoda = 0;
let finalJar = 0;
let finalBoba = 0;
let charStorage = [];



//start quiz and advance to next question
function quizStart(){
    axios
    .get('http://localhost:4040/api/quiz')
    .then(function(res){
        const data = res.data;
        createQuizCard(data);
    })
}



//create quiz card for each question
function createQuizCard(data){
    //run for all questions except for the last
    if(question < 10){
        mainBody.innerHTML = `
            <section class="quiz-card">
                <h1 id="question-heading">${data[index].question}</h1>
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
        nextQuestion.addEventListener('click', next);
    }
    //run for the last question
    else{
        mainBody.innerHTML = `
            <section class="quiz-card">
                <h1 id="question-heading">${data[index].question}</h1>
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
        //determine which choice was selected by user, highlight choice, send choice to counter function
        let choice = document.querySelectorAll(".answer-pic");
        for(let i = 0; i < choice.length; i++){
            choice[i].addEventListener('click', function(){
            choice[i].classList.add('selected');
            counter(i);
            })
        }
        //set up for when user clicks the finish button after answering the questio
        let finalQuestion = document.querySelector('#final');
        finalQuestion.addEventListener('click', results); 
    }
}



//get character info again, store counters for each character, advance to next question card
function next(){
    let choice = document.querySelectorAll(".answer-pic");
    let choiceCounter = 0;
    for(let i = 0; i < choice.length; i++){
        if(!choice[i].classList.contains('selected')){
            choiceCounter++;
        }
    }
    if(choiceCounter === 4){
        alert("No option selected");
    }
    else{
        axios
        .get('http://localhost:4040/api/next')
        .then(function(res){
            const data = res.data;
            index++;
            question++;
            finalVader+=vaderCount;
            finalKenobi+=kenobiCount;
            finalRey+=reyCount;
            finalYoda+=yodaCount;
            finalJar+=jarCount;
            finalBoba+=bobaCount;
            finalAhsoka+=ahsokaCount;
            finalHan+=hanCount;
            finalMaul+=maulCount;
            finalKylo+=kyloCount;
            finalMando+=mandoCount;
            finalPadme+=padmeCount;
            createQuizCard(data);
        }) 
    }
}



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
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            ahsokaCount++;
            maulCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            jarCount++;
            kyloCount++;
            padmeCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            yodaCount++;
            mandoCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            hanCount++;
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
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            reyCount++;
            hanCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            yodaCount++;
            reyCount++;
            padmeCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            bobaCount++;
            maulCount++;
            kyloCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            ahsokaCount++;
            mandoCount++;
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
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            yodaCount++;
            padmeCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            kyloCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            mandoCount++;
            maulCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            reyCount++;
            ahsokaCount++;
            hanCount++;
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
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            yodaCount++;
            jarCount++;
            ahsokaCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            kyloCount++;
            padmeCount++
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            bobaCount++;
            hanCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            maulCount++;
            mandoCount++;
        }
    }
     //Question 5
     else if(question === 5){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            yodaCount++;
            padmeCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            mandoCount++;
            ahsokaCount++;
            maulCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            reyCount++;
            hanCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            jarCount++;
            kyloCount++;
        }
    }
     //Question 6
     else if(question === 6){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            kenobiCount++;
            mandoCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            yodaCount++;
            ahsokaCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            maulCount++;
            padmeCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            kyloCount++;
            hanCount++;
        }
    }
     //Question 7
     else if(question === 7){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            kyloCount++;
            maulCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            reyCount++;
            ahsokaCount++;
            mandoCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            kenobiCount++;
            hanCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            yodaCount++;
            padmeCount++;
        }
    }
     //Question 8
     else if(question === 8){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            yodaCount++;
            padmeCount++;
            mandoCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            maulCount++;
            kyloCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            kenobiCount++;
            ahsokaCount++;
            hanCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            bobaCount++;
        }
    }
     //Question 9
     else if(question === 9){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            maulCount++;
            hanCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            reyCount++;
            kenobiCount++;
            ahsokaCount++;
            padmeCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            mandoCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            vaderCount++;
            yodaCount++;
            kyloCount++;
        }
    }
     //Question 10
     else if(question === 10){
        //first answer
        if(i === 0){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            bobaCount++;
            vaderCount++;
            kyloCount++;
        }
        //second answer
        else if(i === 1){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            jarCount++;
            reyCount++;
            maulCount++;
            ahsokaCount++;
        }
        //third answer
        else if(i === 2){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            yodaCount++;
            hanCount++;
            mandoCount++;
        }
        //fourth answer
        else if(i === 3){
            vaderCount = 0;
            kenobiCount = 0;
            reyCount = 0;
            yodaCount = 0;
            jarCount = 0;
            bobaCount = 0;
            ahsokaCount = 0;
            hanCount = 0;
            maulCount = 0;
            kyloCount = 0;
            mandoCount = 0;
            padmeCount = 0;
            kenobiCount++;
            padmeCount++;
        }
    }  
}



//display results of quiz after finish button is clicked
function results(){
    let choice = document.querySelectorAll(".answer-pic");
    let choiceCounter = 0;
    for(let i = 0; i < choice.length; i++){
        if(!choice[i].classList.contains('selected')){
            choiceCounter++;
        }
    }
    if(choiceCounter === 4){
        alert("No option selected");
    }
    else{
        axios
        .get('http://localhost:4040/api/results')
        .then(function(res){
            let charData = [];
            const data = res.data;
            // console.log('Total Vader: ' + finalVader);
            // console.log('Total Yoda: ' + finalYoda);
            // console.log('Total Rey: ' + finalRey);
            // console.log('Total Kenobi: ' + finalKenobi);
            // console.log('Total Jar Jar: ' + finalJar);
            // console.log('Total Boba: ' + finalBoba);
            // console.log('Total Ahsoka:' + finalAhsoka);
            // console.log('Total Han:' + finalHan);
            // console.log('Total Maul:' + finalMaul);
            // console.log('Total Kylo:' + finalKylo);
            // console.log('Total Mando:' + finalMando);
            // console.log('Total Padme:' + finalPadme);
            if(finalVader > finalKenobi && finalVader > finalRey && finalVader > finalYoda && finalVader > finalJar && finalVader > finalBoba && finalVader > finalAhsoka && finalVader > finalKylo && finalVader > finalHan && finalVader > finalPadme && finalVader > finalMando && finalVader > finalMaul){
                charData = data[0];
            }
            else if(finalKenobi > finalVader && finalKenobi > finalRey && finalKenobi > finalYoda && finalKenobi > finalJar && finalKenobi > finalBoba && finalKenobi > finalAhsoka && finalKenobi > finalKylo && finalKenobi > finalHan && finalKenobi > finalPadme && finalKenobi > finalMando && finalKenobi > finalMaul){
                charData = data[1];
            }
            else if(finalRey > finalVader && finalRey > finalKenobi && finalRey > finalYoda && finalRey > finalJar && finalRey > finalBoba && finalRey > finalAhsoka && finalRey > finalKylo && finalRey > finalHan && finalRey > finalPadme && finalRey > finalMando && finalRey > finalMaul){
                charData = data[2];
            }
            else if(finalJar > finalVader && finalJar > finalKenobi && finalJar > finalRey && finalJar > finalYoda && finalJar > finalBoba && finalJar > finalAhsoka && finalJar > finalKylo && finalJar > finalHan && finalJar > finalPadme && finalJar > finalMando && finalJar > finalMaul){
                charData = data[3];
            }
            else if(finalYoda > finalVader && finalYoda > finalKenobi && finalYoda > finalRey && finalYoda > finalJar && finalYoda > finalBoba && finalYoda > finalAhsoka && finalYoda > finalKylo && finalYoda > finalHan && finalYoda > finalPadme && finalYoda > finalMando && finalYoda > finalMaul){
                charData = data[4];
            }
            else if(finalBoba > finalVader && finalBoba > finalKenobi && finalBoba > finalRey && finalBoba > finalJar && finalBoba > finalYoda && finalBoba > finalAhsoka && finalBoba > finalKylo && finalBoba > finalHan && finalBoba > finalPadme && finalBoba > finalMando && finalBoba > finalMaul){
                charData = data[5];
            }
            else if(finalAhsoka > finalVader && finalAhsoka > finalKenobi && finalAhsoka > finalRey && finalAhsoka> finalJar && finalAhsoka > finalYoda && finalAhsoka > finalBoba && finalAhsoka > finalKylo && finalAhsoka > finalHan && finalAhsoka > finalPadme && finalAhsoka > finalMando && finalAhsoka > finalMaul){
                charData = data[7];
            }
            else if(finalHan > finalVader && finalHan > finalKenobi && finalHan > finalRey && finalHan > finalJar && finalHan > finalYoda && finalHan > finalAhsoka && finalHan > finalKylo && finalHan > finalBoba && finalHan > finalPadme && finalHan > finalMando && finalHan > finalMaul){
                charData = data[8];
            }
            else if(finalMaul > finalVader && finalMaul > finalKenobi && finalMaul > finalRey && finalMaul > finalJar && finalMaul > finalYoda && finalMaul > finalAhsoka && finalMaul > finalKylo && finalMaul > finalHan && finalMaul > finalPadme && finalMaul > finalMando && finalMaul > finalBoba){
                charData = data[11];
            }
            else if(finalKylo > finalVader && finalKylo > finalKenobi && finalKylo > finalRey && finalKylo > finalJar && finalKylo > finalYoda && finalKylo > finalAhsoka && finalKylo > finalBoba && finalKylo > finalHan && finalKylo > finalPadme && finalKylo > finalMando && finalKylo > finalMaul){
                charData = data[6];
            }
            else if(finalMando > finalVader && finalMando > finalKenobi && finalMando > finalRey && finalMando > finalJar && finalMando > finalYoda && finalMando > finalAhsoka && finalMando > finalKylo && finalMando > finalHan && finalMando > finalPadme && finalMando > finalBoba && finalMando > finalMaul){
                charData = data[10];
            }
            else if(finalPadme > finalVader && finalPadme > finalKenobi && finalPadme > finalRey && finalPadme > finalJar && finalPadme > finalYoda && finalPadme > finalAhsoka && finalPadme > finalKylo && finalPadme > finalHan && finalPadme > finalBoba && finalPadme > finalMando && finalPadme > finalMaul){
                charData = data[9];
            }
            else if(finalYoda === finalVader || finalYoda === finalKenobi || finalYoda === finalRey || finalYoda === finalJar || finalYoda === finalBoba || finalYoda === finalKylo || finalYoda === finalAhsoka || finalYoda === finalHan || finalYoda === finalPadme || finalYoda === finalMando || finalYoda === finalMaul){
                charData = data[4];
            }
            else if(finalKenobi === finalVader || finalKenobi === finalRey || finalKenobi === finalJar || finalKenobi === finalBoba || finalKenobi === finalKylo || finalKenobi === finalAhsoka || finalKenobi === finalHan || finalKenobi === finalPadme || finalKenobi === finalMando || finalKenobi === finalMaul){
                charData = data[1];
            }
            else if(finalVader === finalJar || finalVader === finalBoba || finalVader === finalRey || finalVader === finalKylo || finalVader === finalAhsoka || finalVader === finalHan || finalVader === finalPadme || finalVader === finalMando || finalVader === finalMaul){
                charData = data[0];
            }
            else if(finalRey === finalJar || finalRey === finalBoba || finalRey === finalKylo || finalRey === finalAhsoka || finalRey === finalHan || finalRey === finalPadme || finalRey === finalMando || finalRey === finalMaul){
                charData = data[2];
            }
            else if(finalAhsoka === finalHan || finalAhsoka === finalMaul || finalAhsoka === finalKylo || finalAhsoka === finalMando || finalAhsoka === finalBoba || finalAhsoka === finalPadme || finalAhsoka === finalJar){
                charData = data[7];
            }
            else if(finalHan === finalMaul || finalHan === finalKylo || finalHan === finalMando || finalHan === finalBoba || finalHan === finalPadme || finalHan === finalJar){
                charData = data[8];
            }
            else if(finalMaul === finalKylo || finalMaul ===  finalMando || finalMaul === finalBoba || finalMaul === finalPadme || finalMaul == finalJar){
                charData = data[11];
            }
            else if(finalKylo === finalMando || finalKylo === finalBoba || finalKylo === finalPadme || finalKylo === finalJar){
                charData = data[6];
            }
            else if(finalMando === finalBoba || finalMando === finalPadme || finalMando === finalJar){
                charData = data[10];
            }
            else if(finalBoba === finalJar || finalBoba === finalPadme){
                charData = data[5];
            }
            else if(finalPadme === finalJar){
                charData = data[9];
            }
            mainBody.innerHTML = `
            <section>
                <h1 id="results-heading">You are ${charData.name}!!</h1>
                <div id="results">
                    <img src=${charData.image} id="results-pic" alt="">
                    <p id="results-info">${charData.result}</p>
                </div>
            </section>`        
    
            //check if character is already in charStorage
            let dataArray = [];
            dataArray.push(charData.name);
            let dataString = dataArray.toString();
            let newString = '';
            let newArray = [];
            for (let i = 0; i < charStorage.length; i++){
                newArray.push(charStorage[i].name)
                newString = newArray.toString('');
            }
            if(newString.includes(dataString)){
                console.log("already exists")
            }
            else{
                charStorage.push(charData);
            }
        })
    }
}



//return to home screen and reset quiz when home text/logo is clicked
function clickHome (){
    //reset counter for next attempt
    index = 0;
    question = 1;
    finalVader = 0;
    finalKenobi = 0;
    finalRey = 0;
    finalYoda = 0;
    finalJar=0;
    finalBoba = 0;
    finalAhsoka = 0;
    finalHan = 0;
    finalMaul = 0;
    finalKylo = 0;
    finalMando = 0;
    finalPadme = 0;
    mainBody.innerHTML = `
    <section id="main-body">
        <h1 id="take">Take The Quiz To Find Out!</h1>
        <button id="start">START</button>
    </section>`
    const startQuiz = document.querySelector('#start');
    startQuiz.addEventListener('click', quizStart);
}



//display roster of characters
function roster(){
    axios
    .get("http://localhost:4040/api/characters")
    .then(function(res) {
        const data = res.data;
        mainBody.innerHTML = `<h2 id="roster-header">Character Roster!</h2>`;
        for(let i = 0; i< data.length; i++){
                mainBody.innerHTML = 
                `<section id="roster">
                ${mainBody.innerHTML}
                <div class="character">
                    <img 
                        class="char-pic"
                        src = ${data[i].image}
                        alt="">
                        <h2 class="roster-name">${data[i].name}</h2>
            </div>
            
            </section>` 
        }
        //allow for user to click on a character to view their bio page
        const bioButton = document.querySelectorAll('.char-pic');
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
        mainBody.innerHTML = 
        `<section id="bio-pic">
            <img src="${data[0].image}" id="the-pic" alt="">
        </section>
        <section id="bio-info">
            <h2 class="big-bio big-bio-white">Name:</h2> <h3 class="big-bio">${data[0].name}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Homeworld:</h2> <h3 class="big-bio big-bio-white">${data[0].planet}</h3>
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Hair Color:</h2> <h3 class="big-bio">${data[0].hair}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Weapon:</h2> <h3 class="big-bio big-bio-white">${data[0].weapon}</h3>
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Birth Year:</h2> <h3 class="big-bio">${data[0].birthday}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Most Famous Movie:</h2> <h3 class="big-bio big-bio-white">${data[0].movie}</h3> 
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Height:</h2> <h3 class="big-bio">${data[0].height}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Vehicle:</h2> <h3 class="big-bio big-bio-white">${data[0].vehicle}</h3> 
        </section>`
    })
}



//show list of possible questions
function listQuestions(){
    axios
    .get('http://localhost:4040/api/questions')
    .then(function(res){
        const data = res.data;
        mainBody.innerHTML = `<h2 id="list-header">Questions List!</h2>`;
        for(let i = 0; i < data.length; i++){
                mainBody.innerHTML = 
                `${mainBody.innerHTML}
                <section class="question-section">
                    <h2 id="ques">${data[i].question}</h2>
                    <ul>
                        <li class="list-answer">${data[i].answer1}</li>
                        <li class="list-answer">${data[i].answer2}</li>
                        <li class="list-answer">${data[i].answer3}</li>
                        <li class="list-answer">${data[i].answer4}</li>
                    </ul>
                </section>`            
        }
    })
}



//display list of characters user has gotten when quiz is taken
function yourCharacters (data,name){
    mainBody.innerHTML = `<h2 id="roster-header">Your Characters!</h2>`;
    for(let i = 0; i < charStorage.length; i++){
      if(name !== charStorage[i].name){
          mainBody.innerHTML = 
          `<section id="roster">
          ${mainBody.innerHTML}
          <div class="your-char">
          <img
              class="your-pic"
              src=${charStorage[i].image}
              alt="">
          <div class="break"></div>
          <h3 class="bio">${charStorage[i].name}</h3>
          <div class="options">
              <button class="delete">DELETE</h3>
          </div>
          <div>
            <label for="changeName" class="change">Change Name</label>
            <input type = "text" name="changeName" class="nameBox"></input>
          </div>
          
          </div>
          </section>`
      }
      else{
          mainBody.innerHTML = 
          `<section id="roster">
          ${mainBody.innerHTML}
          <div class="your-char">
          <img
              class="your-pic"
              src=${charStorage[i].image}
              alt="">
          <div class="break"></div>
          <h3 class="bio">${data}</h3>
          <div class="options">
              <button class="delete">DELETE</h3>
          </div>
          <div>
            <label for="changeName" class="change">Change Name</label>
            <input type = "text" name="changeName" class="nameBox"></input>
          </div>
          
          </div>
          </section>`
      }
        const bioButton = document.querySelectorAll('.your-pic');
        const deleteBtn = document.querySelectorAll('.delete');
        const changeBtn = document.querySelectorAll('.change');

        //select a character to delete
        for(let d = 0; d < deleteBtn.length; d++){
            let name = charStorage[d].name;
            deleteBtn[d].addEventListener('click', function(){
                deleteChar(name);
            });
        }

        //change name to a different name
        for(let r = 0; r < changeBtn.length; r++){
            let name = charStorage[r].name;
            changeBtn[r].addEventListener('click', function(){
                changeName(name,r);
            })
        }

        //view bio of selected character 
        for(let i = 0; i < bioButton.length; i++){
            let imageSrc = charStorage[i].image;
            bioButton[i].addEventListener('click', function(){
                yourBio(imageSrc);
            });
        }
    }
}



//display full bio for character selected on Your Characters screen
function yourBio(image){
    let bodyObj = {
        image
    }
    axios
    .post('http://localhost:4040/api/your-character-bio', bodyObj)
    .then(function(res){
        const data = res.data;
        mainBody.innerHTML = 
        `<section id="bio-pic">
            <img src="${data[0].image}" id="the-pic" alt="">
        </section>
        <section id="bio-info">
            <h2 class="big-bio big-bio-white">Name:</h2> <h3 class="big-bio">${data[0].name}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Homeworld:</h2> <h3 class="big-bio big-bio-white">${data[0].planet}</h3>
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Hair Color:</h2> <h3 class="big-bio">${data[0].hair}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Weapon:</h2> <h3 class="big-bio big-bio-white">${data[0].weapon}</h3>
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Birth Year:</h2> <h3 class="big-bio">${data[0].birthday}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Most Famous Movie:</h2> <h3 class="big-bio big-bio-white">${data[0].movie}</h3> 
            <div class="break"></div>
            <h2 class="big-bio big-bio-white">Height:</h2> <h3 class="big-bio">${data[0].height}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Vehicle:</h2> <h3 class="big-bio big-bio-white">${data[0].vehicle}</h3> 
        </section>`
    })
}



//functionality to delete character from Your Characters list
function deleteChar(name){
    axios
    .delete(`http://localhost:4040/api/${name}`)
    .then(function(res){
        const data = res.data;
        for(let i = 0; i < charStorage.length; i++){
            if(data[0].name === charStorage[i].name){
                charStorage.splice(i,1);
            }
        }
       yourCharacters(); 
    })
}



//change name of character
//dosen't update database thus name doesn't save
function changeName(name, r){
    let newNames = document.querySelectorAll('.nameBox');
    let newNameValue = newNames[r].value;
    console.log(newNameValue);
        let bodyObj = {
            newNameValue
        }
        axios
        .put(`http://localhost:4040/api/${name}`, bodyObj)
        .then(function(res){
            data = res.data;
            yourCharacters(data,name);      
        })
}



startQuiz.addEventListener('click', quizStart);
charButton.addEventListener('click', roster);
questionsList.addEventListener('click', listQuestions);
logoBtn.addEventListener('click', clickHome);
homeBtn.addEventListener('click', clickHome);
yourBtn.addEventListener('click', yourCharacters);
