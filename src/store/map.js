import { defineStore } from "pinia";

export const MapTile = {
  FLOOR: 2,
  WALL: 1,
};

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];

  function setupMap(newMap) {
    map.splice(0, map.length, ...newMap);
  }

  function isWall(postion) {
    return map[postion.x][postion.y] === MapTile.WALL;
  }

  return {
    map,
    setupMap,
    isWall,
  };
});
