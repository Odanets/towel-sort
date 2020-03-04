
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr = [];
 
  if (!matrix) return [];

  if (matrix.length > 0) {
  matrix.map(function(a, index) {
    if ((index + 1) % 2 == 0) a.reverse();
    else a;
  });

  arr = matrix.flat();
 
  return arr;
  } else return [];
}
