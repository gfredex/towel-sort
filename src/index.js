
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortArr = [];
  let result = [];
  if (matrix) {
    for (i = 0; i < matrix.length; i++) {
      if (!(i % 2)) {
        sortArr.push(matrix[i]);
      } else {
        sortArr.push(matrix[i].reverse());
      }
    }

    for (i = 0; i < sortArr.length; i++) {
      for (j = 0; j < sortArr[i].length; j++) {
        result.push(sortArr[i][j]);
      }
    }
  }



  return result;
}
