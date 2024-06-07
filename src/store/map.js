import { defineStore } from "pinia";
import { useGameStore } from "./game";

export const MapTile = {
  WALL: 1,
  FLOOR: 2
};

export const useMapStore = defineStore("map", () => {
  let { map } = useGameStore()

  function setupMap(newMap) {
    map.splice(0, map.length, ...newMap);
  }

  function isWall(postion) {
    // x,y翻转
    return map[postion.y][postion.x] === MapTile.WALL;
  }

  return {
    map,
    setupMap,
    isWall,
  };
});
