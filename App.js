//TODO: Shashank: fill the array with a bunch chatGPT gen responses
const listOfTextToDisplay = ['temp']

// Add JavaScript code here to handle button clicks and display the 8 ball answer.
const listOfImages = ['./assests/8ball1.png', "./assests/8ball2.jpg"]
function changeImage(){
    console.log('changeImage() call');
    let random = Math.floor(Math.random() * listOfImages.length);
    let image = document.getElementById("8ball");
    image.src = listOfImages[random];
}