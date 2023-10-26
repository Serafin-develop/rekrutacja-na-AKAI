function reverseNumber(number) {
  reversedNumber = 0; 
  while(number != 0) {
    remainder = number % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    number /= 10;
    number = Number.parseInt(number);
  }  
  return reversedNumber;
}

console.log("1.", reverseNumber(12345));

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  sum = 0; 
  array.forEach(i => {
    if(i%2==0){
      sum +=i; 
    }
  });
  return sum; 
}

console.log("2.", addEven(tab));
