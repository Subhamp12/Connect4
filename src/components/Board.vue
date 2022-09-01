<template>
    <div class="board">
        <div class="row" v-for="row in rows">
            <div class="square" v-for="column in columns" />
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rows: 6,
            columns: 7
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
    .row {
        display: flex;
    }
</style>