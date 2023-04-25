// Add JavaScript code here to handle button clicks and display the 8 ball answer.
const listOfImages = ['../assets/8ball1.png', "../assets/8ball2.png", "../assets/8ball3.png", "../assets/8ball4.png", "../assets/8ball5.png", "../assets/8ball6.png", "../assets/8ball7.png"]
function changeImage(){
    console.log('changeImage() call');
    let random = Math.floor(Math.random() * listOfImages.length);
    let image = document.getElementById("eight-ball-image");
    image.src = listOfImages[random];
}

function handleOnPlay(){
  const question = document.getElementById("question").value;
  sound(question);
  getAnswer(question);
}

// Function to handle button clicks and display the 8 ball answer.
function getAnswer(question) {
    if (!question) {
      document.getElementById("answer").innerHTML = "Please ask a yes / no question";
      return;
    }
    var answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "Outlook not so good.",
      "My sources say no.",
      "Very doubtful.",
      "My reply is no."
    ];

    var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("question").value = "";
    document.getElementById("answer").innerHTML = answer;
    // Response voice by Speech Synthesis API, see more at: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
    utterance = new SpeechSynthesisUtterance(answer);
    speechSynthesis.speak(utterance);
  }

// Function to play sound when the button "Play" is clicked
function sound(question){
  if (question) {
    var snd = new Audio('../assets/magic-8-ball-sound.mp3')
    return snd.play();
  }
}