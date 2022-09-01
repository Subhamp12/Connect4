<script setup>
import Board from './components/Board.vue';
</script>

<template>
  <h1>Connect 4</h1>
  <button v-if="gameMode === 'initial'" @click="startGame">Start Game</button>
  <Board v-if="gameMode ==='play'"/>
  <button v-if="gameMode === 'play'" @click="endGame">End Game</button>
</template>



<script>

export default {
  data() {
    return {
      gameMode: 'initial'
    }
  },
  methods: {
    startGame() {
      this.gameMode = 'play'
    },
    endGame() {
      this.gameMode = 'initial'
    }
  }
}
</script>