function sumAll(arr) {

  //sort the array from smallest to largest
  arr.sort(function(a, b) {
    return a - b;
  });
  
  //set new empty array
  var newArr = [];
  
  //to new array, push values from lower number to higher number
  for (i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  };
  
  //set arr equal to reduction of new array by sum
  arr = newArr.reduce(function(a,b) {
    return a + b;
  });
  
  //return array
  return arr;

}

sumAll([1, 4]);
