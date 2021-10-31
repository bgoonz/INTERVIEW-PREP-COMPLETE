# Robot Paths

Let’s say a robot is located at the top-left corner of an n x n grid. The robot can move either up, down, left, or right, one space at a time. It also cannot visit the same spot twice. The robot is trying to reach the bottom-right corner of the grid.

Write a function to count the number of ways that the robot can reach the bottom-right corner of the grid. Your function should receive `n` (the size of the grid) as a parameter.

A board can be generated using this function:

    function makeBoard(n) {
      let board = [];
      for (let i = 0; i < n; i++) {
        board.push([]);
        for (let j = 0; j < n; j++) {
          board[i].push(false);
        }
      }
      board.toggle = (i, j) => {
        board[i][j] = !board[i][j];
      };
      board.hasBeenVisited = (i, j) => {
        return board[i][j];
      };
      return board;
    }

## Example

`robotPaths(3)` should create a 3 X 3 board, count the following paths, and return `12`

<table><thead><tr class="header"><th>S</th><th></th><th></th></tr></thead><tbody><tr class="odd"><td>1</td><td></td><td></td></tr><tr class="even"><td>2</td><td>3</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th></th><th></th></tr></thead><tbody><tr class="odd"><td>1</td><td>4</td><td>5</td></tr><tr class="even"><td>2</td><td>3</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>5</th><th>6</th></tr></thead><tbody><tr class="odd"><td>1</td><td>4</td><td>7</td></tr><tr class="even"><td>2</td><td>3</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th></th><th></th></tr></thead><tbody><tr class="odd"><td>1</td><td>2</td><td>3</td></tr><tr class="even"><td></td><td></td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>3</th><th>4</th></tr></thead><tbody><tr class="odd"><td>1</td><td>2</td><td>5</td></tr><tr class="even"><td></td><td></td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th></th><th></th></tr></thead><tbody><tr class="odd"><td>1</td><td>2</td><td></td></tr><tr class="even"><td></td><td>3</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th>2</th></tr></thead><tbody><tr class="odd"><td></td><td></td><td>3</td></tr><tr class="even"><td></td><td></td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th>2</th></tr></thead><tbody><tr class="odd"><td></td><td>4</td><td>3</td></tr><tr class="even"><td></td><td>5</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th>2</th></tr></thead><tbody><tr class="odd"><td>5</td><td>4</td><td>3</td></tr><tr class="even"><td>6</td><td>7</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th></th></tr></thead><tbody><tr class="odd"><td></td><td>2</td><td></td></tr><tr class="even"><td></td><td>3</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th></th></tr></thead><tbody><tr class="odd"><td>3</td><td>2</td><td></td></tr><tr class="even"><td>4</td><td>5</td><td>E</td></tr></tbody></table>

<table><thead><tr class="header"><th>S</th><th>1</th><th></th></tr></thead><tbody><tr class="odd"><td></td><td>2</td><td>3</td></tr><tr class="even"><td></td><td></td><td>E</td></tr></tbody></table>
