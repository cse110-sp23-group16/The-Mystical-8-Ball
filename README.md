# The-Mystical-8-Ball

## Developer Note

- Aiden: While working on the UI, I tried to use flexbox for the containers (as I have never used it before), and I struggled a lot with the position of the items the sizing. Also I often uncertain about how to orgainize the code (especially for the css code). 

## Features

**Basic input-response function**
  - The user can input a yes/no question in the input box located on the right-hand side. They can obtain a creative response from the 8-ball located above the input box by either clicking the "Play" button or pressing the enter key.

**Visual variation**
  - The user can change image of the 8-balls by clicking the 'Click me to change image' button.

**Response voice**
  - Text speech function to read up responses from the magic 8-ball.
  - It is just the default text-speech api.

**Delayed Response**
 - The loadingAns function in App.js is called when the button is clicked (line 20 index.html). This displays the answer as loading while the answer is being picked randomly. The getElementByID method and .value of it's return gets the reference with the specified value. 

**Sound Effect on click of Button**
  - The sound function in App.js is called when the button is clicked (line 20 index.html). It uses the audio file in the assets folder, which plays a mystical sound effect on the click of the button.The new Audio method is called to access the audio file and set to a variable that's used to play the audio. The play method loads and starts the playback of the audio file defined.