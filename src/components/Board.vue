<template>
    <div class="board">
        <div class="row" v-for="(row) in board">
            <div class="square" :class="{
'player-1': column === 1,
'player-2': column === 2,
            }" v-for="(column, columnIndex) in row" @click="updateCell(columnIndex)" />
        </div>
    </div>
    <div>Current player turn: {{currentPlayer}}</div>
    <div>Current next row: {{blank}}</div>
    <div>Game Mode: {{gameMode}}</div>
    <div>Someone won: <span v-if="gameMode === 'win1'">PLAYER 1 IS THE WINNER!!!</span><span v-if="gameMode === 'win2'">PLAYER 2 IS THE WINNER!!!</span></div>
</template>

<script>
    export default {
        props: {
            gameMode: String,
            endGame: Function,
        },
        data() {
            return {
                board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      blank: [6,6,6,6,6,6,6],
      currentPlayer: 1
            }
        },
        methods: {
            updateCell(columnIndex) {
                // Check and see if game is a draw
                if (this.blank[columnIndex] > 0) {
                    this.blank[columnIndex] -= 1;
                    this.board[this.blank[columnIndex]][columnIndex] = this.currentPlayer;
                }
                if (this.blank.every(num => num === 0)){
                    // Update gameMode to say tie
                    this.endGame('tie');
                } else if (this.gameMode === "end" || this.gameMode === 'win1' || this.gameMode === 'win2') {
                    return;
                } else if (this.checkVertical(columnIndex) === 4 ) {
                    if (this.currentPlayer === 1) {
                        this.endGame('win1');
                    } else {
                        this.endGame('win2');
                    }
                } else if (this.checkHorizontal(this.blank[columnIndex]) === 4 ) {
                    if (this.currentPlayer === 1) {
                        this.endGame('win1');
                    } else {
                        this.endGame('win2');
                    }
                }
                 else {
                    this.updatePlayer();
                }
            },
            checkVertical(columnIndex) {
                let sum = 1;
                for(let i = 0; i < this.board.length - 1; i++) {
                    if (this.board[i][columnIndex] === this.board[i+1][columnIndex]) {
                        sum+=1;
                    } else {
                        sum = 1;
                    }
                }
                return sum;
            },
            checkHorizontal(rowIndex) {
                let sum = 0;
                for(let i = 0; i < this.blank.length - 1; i++) {
                    if (this.board[rowIndex][i] === this.board[rowIndex][i+1]) {
                        sum+=1;
                    } else {
                        sum = 0;
                    }
                }
                return sum;
            },
            isOutOfBound(rowIndex, columnIndex) {
                return rowIndex < 0 || rowIndex > 5 || columnIndex < 0 || columnIndex > 6;
            },
            updatePlayer() {21
                if (this.currentPlayer === 1) {
                    this.currentPlayer = 2
                }
                else {
                    this.currentPlayer = 1
                }
            },
            resetBoard() {
              initialBoard()
            }
        }
    }
    </script>
<style>
    .board {
        margin-bottom: 25px;
    }
    .square {
        width: 25px;
        height: 25px;
        background: #cccccc;
        margin: 1px;
        border-radius: 50%;
    }
    .player-1 {
        background: yellow;
    }
    .player-2 {
        background: red;
    }
    .row {
        display: flex;
    }
</style>