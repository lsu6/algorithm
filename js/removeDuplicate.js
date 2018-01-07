//Question: How would you remove duplicate members from an array?
//
// ans 1
// function removeDuplicate(arr){
//   if(!arr){
//     return arr;
//   }
//   function compare(a, b){
//     return a - b;
//   }
//   arr.sort(compare);
//   var num;
//   for(var i = 1 ; i < arr.length; i++){
//     num = arr[i];
//     if(num === arr[i - 1]){
//       arr.splice(i , 1);
//       i--;
//     }
//   }
//   return arr;
// }

// ans 2:
// function removeDuplicate(arr){
//   if(!arr) return arr;
//   var set = new Set();
//   for(var i = 0; i < arr.length; i++){
//     if(!set.has(arr[i])) set.add(arr[i]);
//   }
//   return Array.from(set);
// }

// ans 3:
// function removeDuplicate(arr){
//   if(!arr) return arr;
//   var obj = {}, res = [];
//   for(var i = 0; i < arr.length; i++){
//     if(!obj[arr[i]]){
//       obj[arr[i]] = true;
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

console.log(removeDuplicate([1,2,10,10,5,5,6]));
