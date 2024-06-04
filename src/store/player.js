import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
  });

  function movePlayerToLeft() {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x - 1, y: player.y })) {
      return;
    }

    player.x -= 1;
  }

  function movePlayerToRight() {
    player.x += 1;
  }

  function movePlayerToDown() {
    player.y += 1;
  }

  function movePlayerToUp() {
    player.y -= 1;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
