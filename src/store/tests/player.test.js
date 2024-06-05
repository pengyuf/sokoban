import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { usePlayerStore } from "../player";
import { useMapStore } from "../map";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { map, setupMap } = useMapStore();
      setupMap([
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2]
      ]);
    });
    it("should move left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToLeft();
      expect(player.x).toBe(0);
    });
    it("should move right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToRight();
      expect(player.x).toBe(2);
    });
    it("should move Down", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToDown();
      expect(player.y).toBe(2);
    });
    it("should move up", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToUp();
      expect(player.y).toBe(0);
    });
  });

  describe("collision wall", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]);
    });

    it("collision wall when move to left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToLeft();
      expect(player.x).toBe(1);
    });
    it("collision wall when move to right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 3;
      player.y = 1;
      movePlayerToRight();
      expect(player.x).toBe(3);
    });
    it("collision wall when move to Down", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 3;
      player.y = 3;
      movePlayerToDown();
      expect(player.y).toBe(3);
    });
    it("collision wall when move to Up", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 3;
      player.y = 1;
      movePlayerToUp();
      expect(player.y).toBe(1);
    });
  });
});
