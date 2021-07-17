//The Variables that are linking the buttons //

var start8btn = document.querySelector(".start8btn button");
var info8box = document.querySelector(".info8box");
var exit8btn = info8box.querySelector(".exit8btn .leave");
var continue8btn = info8box.querySelector(".exit8btn .continue");
var box8quiz = document.querySelector(".box8quiz");
var results = document.querySelector(".results");
var options8list = document.querySelector(".options8list");
var timer8count = box8quiz.querySelector(".seconds")
var timer8questions = questions.length * 12;
var timer8id;




//This will allow the quiz to added//
start8btn.onclick = ()=>{
    info8box.classList.add("activeInfo");
}

//THis will take you back to the beginning//
exit8btn.onclick = ()=>{
    info8box.classList.remove("activeInfo");
}

//This should prompt the quiz//
continue8btn.onclick = ()=>{
    info8box.classList.remove("activeInfo");
    box8quiz.classList.add("activeQuiz");
    showQuestions(0);
    queCount(1);
    timer8id = setInterval(timer, 1000)
    timer8count.textContent = timer8questions;
    // startTimer(20);
}

let display8count = 0;
let que8numb = 1;
let time8counter;
// let clock = 60;
let totalScore = 0;



var restart8JavaScriptQ = results.querySelector(".button .redo");
var quit8JavaScriptQ = results.querySelector(".button .end");




quit8JavaScriptQ .onclick =()=>{
    window.location.reload();
}


var next8btn = box8quiz.querySelector(".next8btn");
//when next button is clicked
next8btn.onclick = ()=>{
    if(display8count < questions.length - 1) {
        display8count++;
        que8numb++;
        showQuestions(display8count);
        queCount(que8numb);
        clearInterval(time8counter);
        startTimer(clock);
        next8btn.style.display = "none";
    }else{
        console.log("Quiz has been finished");
        showResultBox();
    }
}

function showQuestions(index){
    const display8text = document.querySelector(".display8text");
    let display8tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let options8tag = '<div class="option">'+ questions[index].options[0] +'</span></div>'
                      + '<div class="option">'+ questions[index].options[1] +'</span></div>'
                      + '<div class="option">'+ questions[index].options[2] +'</span></div>'
                      + '<div class="option">'+ questions[index].options[3] +'</span></div>';
    display8text.innerHTML = display8tag;
    options8list.innerHTML = options8tag;
    const option = options8list.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer){
    clearInterval(time8counter);
    let userAns = answer.textContent;
    console.log(userAns);
    let corrAns = questions[display8count].answer;
    const allOptions = options8list.children.length;
    if(userAns === corrAns) {
        totalScore += 1;
        console.log(totalScore);
        answer.classList.add("correct");
        console.log("Answer is Right")
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong")

        for(i = 0; i < allOptions; i++) {
            if(options8list.children[i].textContent == corrAns){
                options8list.children[i].setAttribute("class", "option correct");
            }
        }

        }
   for (i = 0; i < allOptions; i++) {
    options8list.children[i].classList.add("disabled")
   }
next8btn.style.display = "block";

}

function showResultBox() {
    info8box.classList.remove("activeInfo");
    box8quiz.classList.remove("activeQuiz")
    results.classList.add("activeResult");
    var finalText = results.querySelector(".score8text");
    if(totalScore > 3) {
        let scoreTag = '<span>Amazing Work! You got <p>'+ totalScore +'</p> out of<p>'+ questions.length +'</p></span>';
        finalText.innerHTML = scoreTag;
    }
    else if(totalScore > 1) {
        let scoreTag = '<span>Nice try, You got <p>'+ totalScore +'</p> out of<p>'+ questions.length +'</p></span>';
        finalText.innerHTML = scoreTag;
    }
        else {
            let scoreTag = '<span>Oops, You got <p>'+ totalScore +'</p> out of<p>'+ questions.length +'</p></span>';
            finalText.innerHTML = scoreTag;
    }
}



    
function timer (){
    timer8questions --;
    timer8count.textContent = timer8questions;
}

//     function timer(){
//         document.getElementById('timer').innerHTML=timer8counter;
//   time--;
//   if (count === 0){
//     clearInterval(time8counter);
//     document.getElementById('count').innerHTML='Done';
//     console.log("You're out of time!");


 


        
        



function queCount(index){
    const question8counter = box8quiz.querySelector(".final8que")
    let totalCount = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    question8counter.innerHTML = totalCount;
}

 




