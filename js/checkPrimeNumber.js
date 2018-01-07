//Question: How would you verify a prime number?
function checkPrime(num){
    if(num < 1){
      return false;
    }
    if(num === 1 || num === 2){
      return true;
    }
    var divisor = 2;
    while(divisor < num){
      if(num % divisor === 0){
        return false;
      }
      divisor++;
    }
    return true;
}

console.log('0: ' + checkPrime(0));
console.log('7: ' + checkPrime(7));
console.log('8: ' + checkPrime(8));
