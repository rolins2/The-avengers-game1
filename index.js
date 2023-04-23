
//The avengers game

console.log("Welcome to the avengers quiz")

var readlineSync = require("readline-sync")

var name = readlineSync.question("Please enter your name ? ")

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

var usrinput = readlineSync.question("Press y to start  or n to exit ")

var score = 0;

var q1 = {

  q:"Who was the first avenger ?",
    
  a : "Captain America",
  b : "Black widow", 
  c : "Iron Man",
  d: "Doctor strange",
  ans: "a"
}


var q2 = {

  q:"What is the name of Tony Stark's Personal AI system ",
    
  a : "Wednesday",
  b : "Ultron", 
  c : "Vision",
  d: "Jarvis",
  ans: "d"
}

var q3 = {

  q:"Which infinity Stone does Doctor Strane possess in the movie Avengers Infinity War ?",
    
  a : "Soul Stone",
  b : "Time Stone", 
  c : "Power Stone",
  d: "Space Stone",
  ans: "b"
}

var q4 = {

  q:"What is the real name of the villain in Avengers: Age of Ultron?",
    
  a : "Thanos",
  b : "Loki", 
  c : "Ultron",
  d: "Red Skull",
  ans: "c"
}

var q5 = {

  q:"Where was the soul stone loacted?",
    
  a : "Gotham",
  b : "Vormir", 
  c : "India",
  d: "Africa",
  ans: "b"
}



var questions = [q1,q2,q3,q4,q5]

if(usrinput === "y")
{
  console.log("The game will start shortly ")
for(var i=0;i < questions.length;i++)

  {

  console.log(questions[i].q)

  console.log("Your options are")
  console.log("a) " + questions[i].a)
  console.log("b) " + questions[i].b)
  console.log("c) " + questions[i].c)
  console.log("d) " + questions[i].d)

  var answ = readlineSync.question("Your Answer : ")

    if(answ == questions[i].ans)
    {
      console.log("Right Answer ")
      score = score + 1
    }
    else
    {
      console.log("Wrong Answer")
    }

    
  }


  console.log("Your score is "+score)
  
  


  
}
else
{
  console.log("Game over")
  return 0;
}