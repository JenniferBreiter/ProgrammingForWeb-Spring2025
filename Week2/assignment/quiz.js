// questions and answers
const popQuiz = [
    {question: 'What is the only planet in our solar system to rotate clockwise on its axis?', 
      answer: 'Venus'},
    {question: 'Weighing around eight pounds, what is the human bodys largest organ?',
        answer: 'The skin'},
    {question: 'How many states does the Appalachian Trail cross?', 
        answer: '14'},
    {question: 'What sport was featured on the first curved U.S. coin in 2014?', 
        answer: 'Baseball'},
    {question: 'Nearly all fossils are preserved in what type of rock?', 
        answer: 'Sedimentary'}
];

// random question prompt
const randomQuestion = Math.floor(Math.random() * popQuiz.length);
console.log(Math.floor(Math.random() * 5));

const userInput = window.prompt(popQuiz[randomQuestion].question);

// user response and correct answer 
window.alert('You answered ' + userInput + '. \nThe correct answer is ' + popQuiz[randomQuestion].answer + '.');