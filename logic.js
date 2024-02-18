var questions =  ["What was Miley Cyrus' birth name?", "Which vegetable is a pickle?", "What is your body's largest organ?", "What is Sweden's capital city?"];

var alternativeAnswers = {

    "answers0": ["Cyrus Berillius Standini", "Destiny Hope Cyrus", "Destiny Hope Cerillius", "Bella Ciao Bella Ciao"],
    "answers1": ["Egg", "Lettuce", "Tomtato", "Cucumber"],
    "answers2": ["Legs", "Torso", "Arms", "Skin"],
    "answers3": ["Hawaii", "Helsinkii", "Stockholm", "London"]
        
}

var correctAnswers = ["Destiny Hope Cyrus", "Cucumber", "Skin", "Stockholm"];

var questionsContainer = document.getElementById("questions");

function generateQuestionAndAnswers(){
    
    var html = "";

    for(let j = 0; j < questions.length; j++){
        
        html += "<div id='row" + j + "' class='row'>";

        html += "<h2 class='text-dark q-header'>" + questions[j] + "</h2>";
       
        answer = alternativeAnswers["answers" + j];
    
        for (let i = 0; i < answer.length; i++) {

            html += "<div id='guess" + i + "' class='btn btn-primary text-white border rounded btn-answers answers'>";

            html += answer[i];
                
            html += "</div>\n";
        }

        html += "</div>\n";
  
    }
    
    questionsContainer.innerHTML = html;

}

generateQuestionAndAnswers();

// click event to all answers
var answersEvent = document.getElementsByClassName("answers");
var welcome = document.getElementById("welcome");

var x = 0;

for(let i = 0; i < answersEvent.length; i++){
    
    var guesses = answersEvent[i];
        
    guesses.addEventListener("click", (e) => {
        
        var answer = e.target.textContent;

        if(answer === correctAnswers[0] || answer === correctAnswers[1] || answer === correctAnswers[2] || answer === correctAnswers[3]){
            
            if(!e.target.classList.contains("right-answer")){
                
                e.target.classList.add("right-answer");
                
                x++;
                // You have won!
                if(x === 4){
    
                    // hide the questions and answers container
                    welcome.classList.add("hidden");
                    questionsContainer.innerHTML = "";
                    //show a message, possible think about how to implement the next set of questions and answers
                    questionsContainer.innerHTML = "<h3> Congratulations bibi you made it!</h3>";
                    questionsContainer.innerHTML += "\n <h2>I Love you <3</h2>";
                    questionsContainer.innerHTML += "\n <h2>Mahal na Mahal kita<3</h2>";
                    questionsContainer.innerHTML += "\n <img src='liseberg.jpg' />";

                }
                
            }
            
        } else {
            
            e.target.classList.add("wrong-answer");

            setTimeout(() => {   
                e.target.classList.remove("wrong-answer");
            }, 1000);

        }

    });

}