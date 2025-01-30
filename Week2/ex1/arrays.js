const movieArray = [
    'Lord of The Rings', 
    ' My Neighbor Totoro',
    ' Harry Potter', 
    ' Jurassic Park',
];

window.alert("Here's a few of my favorite movies: " + movieArray);

let userInput = window.prompt("What is your favorite movie?");

movieArray.push(userInput);

window.alert("Here are our favorite movies: " + movieArray.toString());