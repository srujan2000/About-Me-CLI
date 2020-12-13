var rs = require('readline-sync')
const chalk = require('chalk');

var name =  rs.question("Your Good name Please: ")

console.log();
console.log(chalk.rgb(58, 235, 52)(`Hello ${name}, let's see how well you know about me`))
console.log();

var score = 0;

var arr = 
  [
    {
     question: "Who is my role model",
     answer: "mark rober"
  },
  {
     question: "Where do I live",
     answer: "hyderabad"
  },
  {
     question: "What is my Mother tongue",
     answer: "telugu"
  },
   {
     question: "What are my hobbies",
     answer: "playing cricket"
  },
   {
     question: "My favorite composer",
     answer: "illayaraja"
  },
   {
     question: "My favorite singer",
     answer: "chitra"
  }
  ]

for(var i =0 ;i<arr.length;i++){
  var ans = arr[i]
  var right = ans['answer']

   console.log(chalk.bold.rgb(50, 230, 227)(`Q: ${ans['question']}`))
  var youranswer = rs.question("Your answer: ");

  if((youranswer).toUpperCase() === right.toUpperCase()){
  console.log(chalk.rgb(10, 255, 27)(`It is a right answer 🤟`))
  score = score + 3
  }
  else{
     console.log(chalk.rgb(250, 34, 10)(`It is a Wrong answer 😌`))
     score = score - 2
  }
  
  console.log(chalk.rgb(250, 0, 192)(`Your Score is :${score}`));
  console.log()
}

console.log(chalk.rgb(218, 250, 10)(`Total Score is : ${score}`))

if(score > 9){
  console.log(chalk.rgb(230, 209, 50)(`You are brilliant 😁 `))
}