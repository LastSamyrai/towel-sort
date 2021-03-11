
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) {
        return arr;
    } else {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    arr.push(matrix[i][j]);
                }
            } else {
                for (z = matrix[i].length-1; z >= 0; z--) {
                    arr.push(matrix[i][z]);
                }
            }
        }
    }
    return arr;
}
