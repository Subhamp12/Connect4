<script setup>
import Board from './components/Board.vue';
</script>

<template>
  <h1>Connect 4</h1>
  <Board :gameOver="gameOver" :endGame="endGame" :startGame="startGame" />
</template>



<script>
export default {
  data() {
    return {
      gameOver: false
    }
  },
  methods: {
    startGame() {
      this.gameOver = false;
    },
    endGame() {
      this.gameOver = true
    }
  }
}
</script>