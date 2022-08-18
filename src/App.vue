<script setup>

</script>

<template>
  <h1>gameMode is: {{gameMode}}</h1>
  <button @click="updateGame">click me!</button>
</template>



<script>
export default {
  data() {
    return {
      gameMode: 'initial'
    }
  },
  methods: {
    updateGame() {
      this.gameMode = 'End'
    }
  }
}
</script>