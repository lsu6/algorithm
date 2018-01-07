// ans1
// function stringReverse(str){
//   if(!str) return str;
//   var res = '';
//   for(var i = str.length - 1; i >= 0; i--){
//     res = res + str.charAt(i) ;
//   }
//   return res;
// }

// ans2
function stringReverse(str){
  if(!str) return str;
  return str.split('').reverse().join('');
}

console.log('string : '+ stringReverse('string'));
