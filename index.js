const readLineSync = require('readline-sync');

//score update
var score = 0;

//taking username
const username = readLineSync.question('What Is Your Name? TYPE HERE: ');
console.log('--------------');
console.log('--------------');
//calling username
console.log(`Welcome! ${username}, This is quiz about how well do you know me! Stick around.`);
console.log('--------------');
console.log('--------------');
//question list
let questionList = [
  {
    question: 'Where do I live?',
    answer: 'uttarakhand'
  },

  {
    question: 'What is my favorite color?',
    answer: 'black'
  },

  {
    question: 'Who is my favorite sportsperson?',
    answer: 'virat kohli'
  },

  {
    question: 'What is my favorite sport?',
    answer: 'cricket'
  },

  {
    question: 'What is my favorite food?',
    answer: 'paneer tikka'
  },

  {
    question: 'Messi versus Ronaldo?',
    answer: 'messi'
  },

  {
    question: 'Which programming language I like the most?',
    answer: 'javascript'
  },

  {
    question: 'Which book genre I like the most?',
    answer: 'fiction'
  },

  {
    question: 'My favorite Season?',
    answer: 'winter'
  },

  {
    question: 'Favorite IPL Team?',
    answer: 'rcb'
  }
  
]


function playGame (questionNumber, question, answer) {

  console.log(`${questionNumber}. ${question}`);
  let userAnswer = readLineSync.question('Write your answer here: ');

  if(userAnswer.toLowerCase() === answer) {
    console.log('You are right');
    score++;
  } else {
    console.log('You are wrong!')
  }
  console.log('--------------');
}

function getValue() {
  var questionNumber = 0;

  for(let i = 0; i < questionList.length; i++) {
    questionNumber++;
    let myQuestion = questionList[i];
    playGame(questionNumber, myQuestion.question, myQuestion.answer);
  }
}

getValue();
console.log('--------------');

//giving badges
if (score >= 7) {
  console.log('Wow! You truely know me.')
} else if (score <= 6 && score >= 4) {
  console.log('Ah! You know me but little.');
} else {
  console.log("Unfortunately! You don't know me.");
}

console.log('--');
console.log(`Your score is ${score}. Well Played!`);

