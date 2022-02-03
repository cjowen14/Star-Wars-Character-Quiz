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
let finalVader = 0;
let finalKenobi = 0;
let finalRey = 0;
let finalYoda = 0;
let finalJar = 0;
let finalBoba = 0;
let charStorage = [];


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
    // console.log(bioButton);
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
            <h2 class="big-bio">Name:</h2> <h3 class="big-bio">${data[0].name}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Homeworld:</h2> <h3 class="big-bio">${data[0].planet}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Hair Color:</h2> <h3 class="big-bio">${data[0].hair}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Weapon:</h2> <h3 class="big-bio">${data[0].weapon}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Birth Year:</h2> <h3 class="big-bio">${data[0].birthday}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Most Famous Movie:</h2> <h3 class="big-bio">${data[0].movie}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Height:</h2> <h3 class="big-bio">${data[0].height}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Vehicle:</h2> <h3 class="big-bio">${data[0].vehicle}</h3> 
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
                <section id="question-section">
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



//create quiz card for each question
function createQuizCard(data){
        //run for all questions except for the last
        // console.log(index);
        if(question < 4){
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
            let choice = document.querySelectorAll(".answer-pic");
            for(let i = 0; i < choice.length; i++){
                choice[i].addEventListener('click', function(){
                choice[i].classList.add('selected');
                counter(i);
            })
        
            }
            let finalQuestion = document.querySelector('#final');
            finalQuestion.addEventListener('click', results); //will display character that was generated
    }
        
}

//start quiz and advance to next question
function quizStart(){
    // console.log("Quiz Started")
    axios
    .get('http://localhost:4040/api/quiz')
    .then(function(res){
        const data = res.data;
         createQuizCard(data);
    })
}

//display results of quiz after finish button is clicked
function results(){
    axios
    .get('http://localhost:4040/api/results')
    .then(function(res){
        // console.log(charStorage)
        let charData = [];
        const data = res.data;
        if(finalVader > finalKenobi && finalVader > finalRey && finalVader > finalYoda && finalVader > finalJar && finalVader > finalBoba){
            charData = data[0];
        }
        else if(finalKenobi > finalVader && finalKenobi > finalRey && finalKenobi > finalYoda && finalKenobi > finalJar && finalKenobi > finalBoba){
            charData = data[1];
        }
        else if(finalRey > finalVader && finalRey > finalKenobi && finalRey > finalYoda && finalRey > finalJar && finalRey > finalBoba){
            charData = data[2];
        }
        else if(finalJar > finalVader && finalJar > finalKenobi && finalJar > finalRey && finalJar > finalYoda && finalJar > finalBoba){
            charData = data[3];
        }
        else if(finalYoda > finalVader && finalYoda > finalKenobi && finalYoda > finalRey && finalYoda > finalJar && finalYoda > finalBoba){
            charData = data[4];
        }
        else if(finalBoba > finalVader && finalBoba > finalKenobi && finalBoba > finalRey && finalBoba > finalJar && finalBoba > finalYoda){
            charData = data[5];
        }
        else if(finalYoda === finalVader || finalYoda === finalKenobi || finalYoda === finalRey || finalYoda === finalJar || finalYoda === finalBoba){
            charData = data[4];
        }
        else if(finalKenobi === finalVader || finalKenobi === finalRey || finalKenobi === finalJar || finalKenobi === finalBoba){
            charData = data[1];
        }
        else if(finalVader === finalJar || finalVader === finalBoba || finalVader === finalRey){
            charData = data[0];
        }
        else if(finalRey === finalJar || finalRey === finalBoba){
            charData = data[2];
        }
        else if(finalBoba === finalJar){
            charData = data[5];
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

//display list of characters user has gotten when quiz is taken
function yourCharacters (){
      mainBody.innerHTML = `<h2 id="roster-header">Your Characters!</h2>`;
      for(let i = 0; i < charStorage.length; i++){
        mainBody.innerHTML = 
        `<section id="first-row">
        ${mainBody.innerHTML}
        <div class="character">
        <img
            class="your-pic"
            src=${charStorage[i].image}
            alt="">
        <div class="break"></div>
        <h3 class="bio">${charStorage[i].name}</h3>
        <button class="delete">DELETE</h3>
    </div>
    </section>`
    const bioButton = document.querySelectorAll('.your-pic');
    const deleteBtn = document.querySelectorAll('.delete');

    //select a character to delete
    for(let d = 0; d < deleteBtn.length; d++){
        let name = charStorage[d].name;
        deleteBtn[d].addEventListener('click', function(){
            deleteChar(name);
        });
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

//functionality to delete character from Your Characters list
function deleteChar(name){
    axios
    .delete(`http://localhost:4040/api/${name}`)
    .then(function(res){
        const data = res.data;
        console.log(data);
        for(let i = 0; i < charStorage.length; i++){
            if(data[0].name === charStorage[i].name){
                charStorage.splice(i,1);
            }
        }
       yourCharacters(); 
    })
}

function yourBio(image){
    let bodyObj = {
        image
    }
    axios
    .post('http://localhost:4040/api/your-character-bio', bodyObj)
    .then(function(res){
        const data = res.data;
        // console.log(data);
        mainBody.innerHTML = 
        `<section id="bio-pic">
            <img src="${data[0].image}" id="the-pic" alt="">
        </section>
        <section id="bio-info">
            <h2 class="big-bio">Name:</h2> <h3 class="big-bio">${data[0].name}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Homeworld:</h2> <h3 class="big-bio">${data[0].planet}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Hair Color:</h2> <h3 class="big-bio">${data[0].hair}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Weapon:</h2> <h3 class="big-bio">${data[0].weapon}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Birth Year:</h2> <h3 class="big-bio">${data[0].birthday}</h3>
            <div class="break"></div>
            <h2 class="big-bio">Most Famous Movie:</h2> <h3 class="big-bio">${data[0].movie}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Height:</h2> <h3 class="big-bio">${data[0].height}</h3> 
            <div class="break"></div>
            <h2 class="big-bio">Vehicle:</h2> <h3 class="big-bio">${data[0].vehicle}</h3> 
        </section>`
    })
}


//return to home screen and reset quiz when home text/logo is clicked
function clickHome (){
    index = 0;
    question = 1;
    finalVader = 0;
    finalKenobi = 0;
    finalRey = 0;
    finalYoda = 0;
    finalJar=0;
    finalBoba = 0;
    // console.log("home clicked")
    mainBody.innerHTML = `
    <section id="main-body">
        <h1 id="take">Take The Quiz To Find Out!</h1>
        <button id="start">START QUIZ</button>
    </section>`
    const startQuiz = document.querySelector('#start');
    startQuiz.addEventListener('click', quizStart);
}


//get character info again, store counters for each character, advance to next question card
function next(){
    axios
    .get('http://localhost:4040/api/next')
    .then(function(res){
        const data = res.data;
        // console.log("next clicked");
        index++;
        question++;
        // console.log(question); 
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
logoBtn.addEventListener('click', clickHome);
homeBtn.addEventListener('click', clickHome);
yourBtn.addEventListener('click', yourCharacters);