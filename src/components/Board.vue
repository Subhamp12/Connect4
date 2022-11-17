<template>
    <div class="board">
        <div class="row" :key="rowIndex" v-for="(row, rowIndex) in board">
            <div class="square" :class="{
                'player-1': column === 1,
                'player-2': column === 2,
            }" v-for="(column, columnIndex) in row" @click="updateCell(columnIndex)" :key="columnIndex" />
        </div>
    </div>
    <div>Current player turn: {{ currentPlayer }}</div>
    <div>Current next row: {{ blank }}</div>
    <div>Winner: <span v-if="winner === null && gameOver">Tie</span><span v-if="winner === 1 && gameOver">Player
            1</span><span v-if="winner === 2 && gameOver">Player 2</span></div>
    <button @click="restartGame">Reset Board</button>
</template>

<script>
import { checkWinner } from '../utils/checkWinner'
export default {
    props: {
        gameOver: Boolean,
        endGame: Function,
        startGame: Function
    },
    data() {
        return {
            board: [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
            ],
            blank: [6, 6, 6, 6, 6, 6, 6],
            currentPlayer: 1,
            winner: null
        };
    },
    methods: {
        updateCell(columnIndex) {
            // If game is over then don't update the board
            if (this.gameOver) {
                return;
            }
            // Only process a move if it's valid
            else if (this.blank[columnIndex] > 0) {
                this.blank[columnIndex] -= 1;
                this.board[this.blank[columnIndex]][columnIndex] = this.currentPlayer;
                // Check for a tie
                if (this.blank.every((num) => num === 0)) {
                    this.endGame()
                } else if (checkWinner(this.board)) {
                    this.endGame()
                    this.winner = this.currentPlayer;
                } else {
                    this.updatePlayer();
                }
            }
        },
        updatePlayer() {
            if (this.currentPlayer === 1) {
                this.currentPlayer = 2;
            } else {
                this.currentPlayer = 1;
            }
        },
        restartGame() {
            this.board = [
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
            ]
            this.blank = [6, 6, 6, 6, 6, 6, 6]
            this.currentPlayer = 1
            this.winner = null
            this.startGame()
        }
    },
};
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
