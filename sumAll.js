function sumAll(arr) {

  //sort the array from smallest to largest
  arr.sort(function(a, b) {
    return a - b;
  });
  
  var newArr = [];
  
  for (i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  
  arr = newArr.reduce(function(a,b) {
    return a + b;
  });
  
  return arr;

}

sumAll([1, 4]);
