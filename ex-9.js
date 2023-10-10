// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
let totalScore = 0
let num = 0
let highscore = 0
let namehighscore
let lowscore = 1000000000000000000000
let namelowscore
for (let key in studentsScore) {
  totalScore = totalScore+studentsScore[key]
  num = num+1
  
  if(studentsScore[key]>highscore){
    highscore = studentsScore[key]
    namehighscore = key
    console.log(highscore)
  }
  if(studentsScore[key]<lowscore){
    lowscore = studentsScore[key]
    namelowscore = key
    console.log(lowscore)
  }

}
console.log("Average score is "+ (totalScore/num))
console.log(namehighscore+" has the highest score, which is "+highscore+" points.")
console.log(namelowscore+" has lowest score, which is "+lowscore+" points.")