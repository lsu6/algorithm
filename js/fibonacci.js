//Question: How do get nth Fibonacci number?
//ans 1
function getNthNumber(n){
  var nums = [0 , 1];

  for(var i = 2 ; i <= n; i++){
    nums[i] = nums[i - 1] + nums[i -2];
  }
  return nums[n];
}
//ans 2
// function getNthNumber(n){
//   if(n <= 0){
//     return 0;
//   }
//   if( n <= 2){
//     return 1;
//   }
//   return getNthNumber(n - 1) + getNthNumber(n - 2);
// }
console.log('0: ' + getNthNumber(0));
console.log('1: ' + getNthNumber(1));
console.log('2: ' + getNthNumber(2));
console.log('4: ' + getNthNumber(4));
console.log('10: ' + getNthNumber(10));
