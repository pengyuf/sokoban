<template>
  <div>
    <Map />
    <Player />
    <div v-for="(cargo, index) in cargos" :key="index">
      <Cargo :cargo="cargo" />
    </div>
    <!-- <Target /> -->
  </div>
</template>

<script setup>
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import Target from "./Target.vue";
import { useCargoStore } from "../../store/cargo";


const { cargos } = useCargoStore()

</script>
<style scoped></style>
