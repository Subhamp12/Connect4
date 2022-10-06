<script setup>
import Board from './components/Board.vue';
</script>

<template>
  <h1>Connect 4</h1>
  <button v-if="gameMode === 'initial'" @click="startGame">Start Game</button>
  <Board v-if="gameMode !== 'initial'" :game-mode="gameMode" :end-game="endGame"  />
  <button v-if="gameMode === 'play'" @click="endGame('end')">End Game</button>
  <button v-if="gameMode === 'play' || gameMode === 'end' || gameMode === 'tie'" @click="restartGame">Restart Game</button>
</template>



<script>
// TODO: Change gameMode to an ENUM
export default {
  data() {
    return {
      gameMode: 'initial',
    }
  },
  methods: {
    startGame() {
      this.gameMode = 'play'
    },
    endGame(mode) {
      this.gameMode = mode
    },
     restartGame() {
      this.gameMode = 'initial'
    }
  }
}
</script>