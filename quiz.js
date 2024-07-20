function checkAnswer() {
    // Function body
    var correctAnswer = "4";
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if(userAnswer === correctAnswer){
        document.getElementById("feedback").textContent ="Correct! Well done.";

    }else{
        document.getElementById("feedback").textContent ="Thats incorrect.Try again!";

    }
}
document.getElementById("submit-answer").addEventListener('click',checkAnswer)