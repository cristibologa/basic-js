const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (!matrix[i].includes(0)) {
        result += matrix[i][j];
        if (i + 1 === matrix.length - 1) {
          result += matrix[matrix.length - 1][j];
        }
      } else {
        if (matrix[i][j] !== 0) {
          result += matrix[i][j];
        }
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
