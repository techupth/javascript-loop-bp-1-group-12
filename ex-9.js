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
let total = 0
for(let i in studentsScore){
  total += studentsScore[i]
}
console.log(`Average score is ${total}`)

let maxScore = 0
let maxScoreName = ""
for(let i in studentsScore){
  if(studentsScore[i]> maxScore){
    maxScoreName = i
    maxScore = studentsScore[i]
  }
}
console.log(`${maxScoreName} has the highest score, which is ${maxScore} points.`)

let minScore
let minScoreName = ""
for(let i in studentsScore){
  if(minScore == undefined){
    minScore = studentsScore[i]
  }
  if(studentsScore[i]<minScore){
    minScoreName = i
    minScore = studentsScore[i]
  }
}
console.log(`${minScoreName} has the highest score, which is ${minScore} points.`)