// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the
// result will be 5.

exports.overlappingSpreads = function (data) {
  let newArray = [];
  for (i = 0; i < data.length; i++) {
    newArray.push(data[i - 1]-1, data[i + 1]+1);
  }

  let arrayDuplicates = [];
  let hash = {};
  for (const element of newArray) {
    if (!hash[`${element}`]) {
      hash[`${element}`];
    } else {
      hash[`${element}`] = true;
      arrayDuplicates.push(element);
    }
  }
  return arrayDuplicates.reduce((a, b) => a + b, 0)
}
