# Movie Chooser
This application is to choose a random movie to watch. This uses 'The Movie Database (TMDb)' API: https://www.themoviedb.org/documentation/api.

## Roadblocks & how it was solved
* Changing 'module.exports' to 'module.exports
* Connecting the api file to the main App component by importing the function
* Attributes not connecting to variables to api function, therefore the variables has the same name as the arrtibute. E.G. 'title' variable is named aftered "title" API attribute
* API GET Request is fixed on a specific id. Resolved by intergrating a 'filmID' that generates a random number between 1 to 999 (maximum length)
* Wanting to show images in the web console (CTRL + SHIFT + I). I found a solution from 'adriancooney.ie' that offers a 'console.image' function via external JS file - http://adriancooney.ie/console.image/console.image.js
* 
