//Question: How would you swap two numbers without using a temporary variable?

function swap(a, b){
  console.log("a: "+ a + " b: "+ b);
  a = a - b;
  b = b + a;
  a = b - a;

  console.log("a: "+ a + " b: "+ b);
}


swap(1 , 2);
