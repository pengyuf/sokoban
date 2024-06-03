<template>
  <div>
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(col, j) in map[i]" :key="j">
        <template v-if="map[i][j] == MapTile.WALL">
          <img :src="wallImg" alt="wallImg" />
        </template>
        <template v-if="map[i][j] == MapTile.FLOOR">
          <img :src="floorImg" alt="floorImg" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMapStore, MapTile } from "../../store/map";
import wallImg from "../../assets/wall.png";
import floorImg from "../../assets/floor.png";

const { map } = useMapStore();
</script>
<style scoped></style>
