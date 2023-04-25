//TODO: Shashank: fill the array with a bunch chatGPT gen responses
const listOfTextToDisplay = ['temp']

// Add JavaScript code here to handle button clicks and display the 8 ball answer.
const listOfImages = ['./assets/8ball1.png', "./assets/8ball2.png", "./assets/8ball3.png", "./assets/8ball4.png", "./assets/8ball5.png", "./assets/8ball6.png", "./assets/8ball7.png"]
function changeImage(){
    console.log('changeImage() call');
    let random = Math.floor(Math.random() * listOfImages.length);
    let image = document.getElementById("8ball");
    image.src = listOfImages[random];
}

// Function to say loading for the answer to have a delay in response
function loadingAns() {
  console.log('loading answer'); //log message in console for debugging purposes
  let question = document.getElementById("question").value;
  let answer = "loading"
  document.getElementById("question").value = "";
  document.getElementById("answer").innerHTML = "<strong>Question:</strong> " + question + "<br><strong>Answer:</strong> " + answer;
}

// Function to handle button clicks and display the 8 ball answer.
function getAnswer() {
    console.log('getAnswer');

    var question = document.getElementById("question").value;
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
    document.getElementById("answer").innerHTML = "<strong>Question:</strong> " + question + "<br><strong>Answer:</strong> " + answer;
  }

// Function to play sound when the button "Play" is clicked
function sound(){
  var snd = new Audio('./assets/magic-8-ball-sound.mp3')
  snd.play();
}
