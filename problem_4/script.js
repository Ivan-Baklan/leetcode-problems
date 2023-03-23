// 48. Rotate Image

// https://leetcode.com/problems/rotate-image/

var rotate = function (matrix) {
  // transposing matrix that flips matrix over its diagonal,that switches row and column indices of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //   using the array method reverse() that are changing the start and end of every row of a matrix
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log(matrix);
