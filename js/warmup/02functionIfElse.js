// function to check if a person is eligible to vote or not
function isEligibleToVote(age) {
  return age >= 18;
}

console.log("Vote Eligibility");
console.log(isEligibleToVote(1)); // false
console.log(isEligibleToVote(18)); // true
console.log(isEligibleToVote(21)); // true

function isEven(number) {
  return number % 2 === 0;
}

console.log("Is number even");
console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(-2)); // true
console.log(isEven(-1)); // false
