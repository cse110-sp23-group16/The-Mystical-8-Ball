# -The-Mystical-8-Ball

## Features

**Basic input-response function**
  - The user can input a yes/no question in the input box located on the right-hand side. They can obtain a creative response from the 8-ball located above the input box by either clicking the "Play" button or pressing the enter key.

**Documentation**
  - The loadingAns function in App.js is called when the button is clicked (line 20 index.html). This displays the answer as loading while the answer is being picked randomly. The getElementByID method and .value of it's return gets the reference with the specified value. 
  - The sound function in App.js is called when the button is clicked (line 20 index.html). It uses the audio file in the assets folder, which plays a mystical sound effect on the click of the button.The new Audio method is called to access the audio file and set to a variable that's used to play the audio. The play method loads and starts the playback of the audio file defined.