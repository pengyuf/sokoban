<template>
    <div class="absolute" :style="postion">
        <img :src="cargoImg" alt="cargoImg">
    </div>
</template>

<script setup>

import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import cargoImg from '../../assets/cargo.png'
import { usePlayerStore } from '../../store/player';
import { usePosition } from '../../composables/usePosition';

const cargo = {
    x: 2,
    y: 2
}

const { postion } = usePosition(cargo)



</script>

<style scoped></style>