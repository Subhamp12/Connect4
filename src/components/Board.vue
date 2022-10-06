<template>
    <div class="board">
        <div class="row" v-for="(row, rowIndex) in board">
            <div class="square" :class="{
'player-1': column === 1,
'player-2': column === 2,
            }" v-for="(column, columnIndex) in row" @click="updateCell(rowIndex, columnIndex)" />
        </div>
    </div>
    <div>Current player turn: {{currentPlayer}}</div>
    <div>Current next row: {{blank}}</div>
    <div>Game Mode: {{gameMode}}</div>
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
            updateCell(rowIndex, columnIndex) {
                // Check and see if game is a draw
                if (this.blank[columnIndex] > 0) {
                    this.blank[columnIndex] -= 1;
                    this.board[this.blank[columnIndex]][columnIndex] = this.currentPlayer;
                }
                if (this.blank.every(num => num === 0)){
                    // Update gameMode to say tie
                    this.endGame('tie');
                } else if (this.gameMode === "end") {
                    return;
                }
                 else {
                    this.updatePlayer();
                }
            },
            updatePlayer() {
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