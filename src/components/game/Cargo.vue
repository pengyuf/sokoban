<template>
    <div class="absolute" :style="postion">
        <img :src="cargoImg" alt="cargoImg">
    </div>
</template>

<script setup>
import cargoImg from '../../assets/cargo.png'
import { usePosition } from '../../composables/usePosition';

const props = defineProps({
    cargo: Object,
    required: true
})

const { postion } = usePosition(props.cargo)



</script>

<style scoped></style>