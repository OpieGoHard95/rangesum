// Code written by Jared Smith
// Solving the Range Sum problem from Ch. 4
// Code written on 2/3/15

var range = function(start, end) {
var rangeArray = [];
  for (var numRange = start; numRange <= end; numRange = numRange + 1)
	if (numRange <= end)
   	 rangeArray.push(numRange); 
  return rangeArray;
}

console.log(range(1,6));

var sum = function(rangeArray) {
	var total = 0
}
console.log(sum(range(1, 6)))
