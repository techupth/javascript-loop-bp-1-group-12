// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

for(let i in companyName){
  reversedCompanyName += companyName[companyName.length - i-1]
}
console.log(reversedCompanyName)