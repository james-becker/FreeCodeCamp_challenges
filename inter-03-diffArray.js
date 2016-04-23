function diffArray(arr1, arr2) {

  //filter function to determine if val in arr1
  function isInArr1(val) {
    if (arr1.indexOf(val) != -1) {
      return false;
    } else {
      return true;
    }
  }
  
  //filter function to determine if val in arr2
  function isInArr2(val) {
    if (arr2.indexOf(val) != -1) {
      return false;
    } else {
      return true;
    }
  }
  
  //define two new arrays as filtered
  var arr3 = arr1.filter(isInArr2);
  var arr4 = arr2.filter(isInArr1);
  
  //concatenate two arrays and return
  return(arr3.concat(arr4));

}

diffArray([1, 2, 3, "pink", 5], [1, 2, 3, "pink", 4, 5]);
