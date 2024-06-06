<template>
    <div class="absolute" :style="postion">
        <img :src="targetImg" alt="targetImg">
    </div>
</template>

<script setup>
import targetImg from '../../assets/target.png'
import { usePosition } from '../../composables/usePosition';

const props = defineProps({
    target: {
        type: Object,
        required: true
    }
})

const { postion } = usePosition(props.target)



</script>

<style scoped></style>