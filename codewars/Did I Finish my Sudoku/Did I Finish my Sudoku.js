function doneOrNot(board) {
    var res = "Finished!";
    for (var i = 0; i < board.length; i++)
    {
        var rowSum = 0,
            columnSum = 0,
            row = board[i];

        // searching overlaped item.
        var check = row.filter(function(x, index, row) { return index === row.indexOf(x); });
        if (check.length !== row.length) { return res = "Try again!"; }

        // rowSum && columnSum = 45
        for (var j = 0; j < 9; j++)
        {
            rowSum += board[i][j];
            columnSum += board[j][i];
        }
        if (rowSum !== 45 || columnSum != 45) { return res = "Try again!"; }
    }
    // block checking
    if (res = "Finished!")
    {
        for (var m = 0; m < 9; m += 3) {
            for (var n = 0; n < 9; n += 3) {
                var squreSum = 0;
                for (var x = m; x < m + 3; x++) {
                    for (var y = n; y < n + 3; y++)
                    {
                        squreSum += board[x][y]; // 3 x 3 block's sum is always 45.
                    }
                }
                if (squreSum !== 45) { return res = "Try again!"; }
            }
        }
    }
    return res;
}

var board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var notCorrect = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

var notCorrect2 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
];
console.log(doneOrNot(board)); // "Finished!"
console.log(doneOrNot(notCorrect)); //"Try again!"
console.log(doneOrNot(notCorrect2)); //"Try again!"
