<template>
    <div class="absolute" :style="postion">
        <img :src="keeperImg" alt="keeperImg">
    </div>
</template>

<script setup>
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player';
import { useMove } from './player'
import { usePosition } from '../../composables/usePosition'

useMove()
const { player } = usePlayerStore()
const { postion } = usePosition(player)

</script>

<style scoped></style>