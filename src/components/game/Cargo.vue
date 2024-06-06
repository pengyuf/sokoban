<template>
    <div class="absolute" :style="postion">
        <img :src="img" alt="cargoImg">
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import cargoImg from '../../assets/cargo.png'
import cargoOnTargetImg from '../../assets/cargo_on_target.png'
import { usePosition } from '../../composables/usePosition';
import { useTargetStore } from '../../store/target';

const props = defineProps({
    cargo: Object,
    required: true
})

const { postion } = usePosition(props.cargo)

const { isTargetPos } = useTargetStore()

const img = ref(cargoImg)

watch(props.cargo, (newPos) => {
    if (isTargetPos(newPos)) {
        img.value = cargoOnTargetImg
    } else {
        img.value = cargoImg
    }
})

</script>

<style scoped></style>