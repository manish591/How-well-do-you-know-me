const readLineSync = require('readline-sync');
const chalk = require('chalk');

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
    question: `Where do I live?
  a. Jaipur
  b. Uttarakhand
  c. Amritsar`,
    answer: 'b'
  },

  {
    question: `What is my favorite color?
  a. Black
  b. Green
  c. Blue`,
    answer: 'a'
  },

  {
    question: `Who is my favorite sportsperson?
  a. Virat Kohli
  b. James Anderson
  c. Manika Batra`,
    answer: 'a'
  },

  {
    question: `What is my favorite sport?
  a. Table Tennis
  b. Cricket
  c. Football`,
    answer: 'b'
  },

  {
    question: `What is my favorite food?
  a. Poha
  b. Dosa
  c. Paneer Tikka`,
    answer: 'c'
  },

  {
    question: `Messi versus Ronaldo?
  a. Messi
  b. Ronaldo
  c. No One`,
    answer: 'a'
  },

  {
    question: `Which programming language I like the most?
  a. Javascript
  b. Python
  c. PHP`,
    answer: 'a'
  },

  {
    question: `Which book genre I like the most?
  a. Business
  b. Programming
  c. Fiction`,
    answer: 'c'
  },

  {
    question: `My favorite Season?
  a. Summer
  b. Winter
  c. Rainy  `,
    answer: 'b'
  },

  {
    question: `Favorite IPL Team?
  a. RCB
  b. MI
  c. RR  `,
    answer: 'a'
  }
  
]

const highScores = [{
  name: "Manish",
  score: 10,
},
{
  name: "Suraj",
  score: 8,
}];


function playGame (questionNumber, question, answer) {

  console.log(`${questionNumber}. ${question}`);
  let userAnswer = readLineSync.question('Write your answer here: ');

  if(userAnswer.toLowerCase() === answer) {
    console.log(chalk.green('You are right'));
    score++;
  } else {
    console.log(chalk.red('You are wrong!'))
  }
  console.log(chalk.blue(`Your current score is ${score}.`))
  console.log('--------------');
}

function getValue() {
  var questionNumber = 0;
  if(username) {
    for(let i = 0; i < questionList.length; i++) {
    questionNumber++;
    let myQuestion = questionList[i];
    playGame(questionNumber, myQuestion.question, myQuestion.answer);
  }

  if (score >= 7) {
  console.log('Wow! You truely know me.')
} else if (score <= 6 && score >= 4) {
  console.log('Ah! You know me but little.');
} else {
  console.log("Unfortunately! You don't know me.");
}

console.log('--');
console.log(chalk.cyan(`Your final score is ${score}. Well Played!`));
console.log('--------------');
for(let j = 0; j < highScores.length; j++) {
  console.log(`High scores by ${highScores[j].name} is ${highScores[j].score}.`)
}

  } else {
    console.log('But Before Playing, Please enter your name.')
  }
}

getValue();
console.log('--------------');

//giving badges


