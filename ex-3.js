// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
let currentValue
for(let i = 0;i<numbers.length;i++){
  if(currentValue == undefined){
    currentValue = numbers[i]
  }
  if(currentValue > numbers[i]){
    currentValue = numbers[i]
    minNumber = currentValue
  }
}
console.log(minNumber)