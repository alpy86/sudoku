module.exports = function solveSudoku(matrix) {

    function getCheck(matrix, x, y, value) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[x][i] === value) {
        return false;
      }
    }

    var endX = 8;
    var startX = 0;

    while (x <= endX) {
      startX = endX - 2;
      endX = endX - 3;
    }

    //console.log(startX);
    //console.log(endX);

    for (var j = 0; j < matrix.length; j++) {
      if (matrix[j][y] === value) {
        return false;
      }
    }

    var endY = 8;
    var startY = 0;

    while (y <= endY) {
      startY = endY - 2;
      endY = endY - 3;
    }

    //console.log(startY);
    //console.log(endY);

    for (var i = startX; i < startX + 3; i++) {
      for (var j = startY; j < startY + 3; j++) {
        if (matrix[i][j] === value) {
          return false;
        }
      }
    }
    return true;
  };

  function getZero(matrix) {
    var zero = [];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          zero.push([i, j]);
        }
      }
    }
    return zero;
  }

  var arrZero = getZero(matrix);
  //console.log(arrZero);

  function calc(matrix) {
    for (var i = 0; i < arrZero.length; i++) {
      var k = i;
      var x = arrZero[k][0];
      var y = arrZero[k][1];
      var value = matrix[x][y] + 1;
      var check = false;

      while (!check && value <= 9) {

        if (getCheck(matrix, x, y, value)) {
          check = true;
          matrix[x][y] = value;
          k++;
        } else {
          value++;
        }
      }

      if (!check) {
        matrix[x][y] = 0;
        k--;
      }

      i = k - 1;
    }
    return matrix;
  };

  var solution = calc(matrix, arrZero);

  return solution;
};
