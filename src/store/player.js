import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useMapStore } from "./map";
import { useCargoStore } from "./cargo";


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

    // 前面是箱子
    const { isCargo, cargoMoveLeft } = useCargoStore()
    const index = isCargo({ x: player.x - 1, y: player.y })
    if (index > -1) {
      const isMoveing = cargoMoveLeft(index)
      if (!isMoveing) {
        return
      }
    }



    player.x -= 1;
  }

  function movePlayerToRight() {
    const { isWall } = useMapStore();
    // 前面是墙
    if (isWall({ x: player.x + 1, y: player.y })) {
      return;
    }

    // 前面是箱子
    const { isCargo, cargoMoveRight } = useCargoStore()
    const index = isCargo({ x: player.x + 1, y: player.y })
    if (index > -1) {
      const isMoveing = cargoMoveRight(index)
      if (!isMoveing) {
        return
      }
    }

    player.x += 1;
  }

  function movePlayerToDown() {
    const { isWall } = useMapStore();
    if (isWall({ x: player.x, y: player.y + 1 })) {
      return;
    }

    // 前面是箱子
    const { isCargo, cargoMoveDown } = useCargoStore()
    const index = isCargo({ x: player.x, y: player.y + 1 })
    if (index > -1) {
      const isMoveing = cargoMoveDown(index)
      if (!isMoveing) {
        return
      }
    }

    player.y += 1;
  }

  function movePlayerToUp() {
    const { isWall } = useMapStore();
    if (isWall({ x: player.x, y: player.y - 1 })) {
      return;
    }
    // 前面是箱子
    const { isCargo, cargoMoveUp } = useCargoStore()
    const index = isCargo({ x: player.x, y: player.y - 1 })
    if (index > -1) {
      const isMoveing = cargoMoveUp(index)
      if (!isMoveing) {
        return
      }
    }

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
