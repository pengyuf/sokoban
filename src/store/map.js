import { defineStore } from "pinia";

export const MapTile = {
  FLOOR: 2,
  WALL: 1,
};

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  function setMap(newMap) {
    map = newMap
  }

  return {
    map,
    setMap
  };
});
