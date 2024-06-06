<template>
    <div class="absolute" :style="postion">
        <img :src="img" alt="keeperImg">
    </div>
</template>

<script setup>
import { usePlayerStore } from '../../store/player';
import { useMove } from './player'
import { usePosition } from '../../composables/usePosition'
import { ref, watch } from 'vue';
import keeperImg from '../../assets/keeper.png'
import keeperOnTargetImg from '../../assets/keeper_on_target.png'
import { useTargetStore } from '../../store/target';

useMove()
const { player } = usePlayerStore()
const { postion } = usePosition(player)
const { isTargetPos } = useTargetStore()

const img = ref(keeperImg)

watch(player, (newPos) => {
    if (isTargetPos(newPos)) {
        img.value = keeperOnTargetImg
    } else {
        img.value = keeperImg
    }
})

</script>

<style scoped></style>