<template>
    <div class="absolute" :style="postion">
        <img :src="keeperImg" alt="keeperImg">
    </div>
</template>

<script setup>

import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player';
import { useMove } from './player'

useMove()
const { postion } = usePosition()


function usePosition() {
    const { player } = usePlayerStore()

    const STEP = 32
    const postion = computed(() => {
        return {
            left: player.x * STEP + 'px',
            top: player.y * STEP + 'px',
        }
    })

    return {
        postion
    }
}



</script>

<style scoped></style>