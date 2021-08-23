function sudoku2(grid) {
    let visited = new Set();
    let size = grid.length
    let rowString, colString, boxString, value, result;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            value = grid[i][j];
            if (value == '.') continue;
            rowString = `${value} found in row ${i}`;
            colString = `${value} found in col ${j}`;
            boxString = `${value} found in box ${Math.floor(i / 3)} ${Math.floor(j / 3)}`
            if (visited.has(rowString) || visited.has(colString) || visited.has(boxString)) {
                return false
            } else {
                visited.add(rowString)
                visited.add(colString)
                visited.add(boxString)
            }

        }
    }
    return true
}

function isCryptSolution(crypt, solution) {
    let solutionHash = {};
    solution.forEach(([char, value]) => {
        solutionHash[char] = value
    })
    let testSum = 0;
    let solutionSum = 0;
    let result = true;
    crypt.forEach((string, index) => {
        let subSum = '';
        for (let i = 0; i < string.length; i++) {

            let char = string[i];
            if (i == 0 && solutionHash[char] == '0' && string.length > 1) {
                result = false
                break
            }
            subSum += solutionHash[char]
        }
        if (index < 2) {
            testSum += parseInt(subSum)
        } else {
            solutionSum = parseInt(subSum)
        }
    })
    return result && testSum == solutionSum
}
