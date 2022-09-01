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
</template>

<script>
    export default {
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
                blank: [
                    6,6,6,6,6,6,6
    
                ],
                currentPlayer: 1
            }
        },
        methods: {
            updateCell(rowIndex, columnIndex) {
                if (this.blank[columnIndex] > 0) {
                    this.blank[columnIndex] -= 1;
                    this.board[this.blank[columnIndex]][columnIndex] = this.currentPlayer;
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