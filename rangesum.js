// Code written by Jared Smith
// Solving the Range Sum problem from Ch. 4
// Code written on 2/3/15

var range = function(start, end) {
  var rangeArray = [];
  for (var numRange = start; numRange <= end; numRange + 1);
    rangeArray.push(numRange); 
  return rangeArray;
}

console.log(range(1,6));
