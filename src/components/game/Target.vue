<template>
    <div class="absolute" :style="postion">
        <img :src="targetImg" alt="targetImg">
    </div>
</template>

<script setup>
import targetImg from '../../assets/target.png'
import { usePosition } from '../../composables/usePosition';

const target = {
    x: 3,
    y: 3
}

const { postion } = usePosition(target)



</script>

<style scoped></style>