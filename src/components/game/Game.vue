<template>
  <div>
    <Map />
    <div v-for="(target, index) in targets" :key="index">
      <Target :target="target" />
    </div>
    <Player />
    <div v-for="(cargo, index) in cargos" :key="index">
      <Cargo :cargo="cargo" />
    </div>
    <button @click="backStep">后退一步</button>
  </div>
</template>

<script setup>
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import Target from "./Target.vue";
import { useCargoStore } from "../../store/cargo";
import { useTargetStore } from "../../store/target";
import { watch } from "vue";
import { isFinishGame, useGameStore } from '../../store/game'

const { cargos } = useCargoStore()
const { targets } = useTargetStore()
const { backStep } = useGameStore()

watch(cargos, () => {
  if (isFinishGame()) {
    setTimeout(() => {
      alert('你赢了')
    }, 0);
  }
})

</script>
<style scoped></style>
