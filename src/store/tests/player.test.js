import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { usePlayerStore } from "../player";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { map, setupMap } = useMapStore();
      const { setupCargos } = useCargoStore()
      setupMap([
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2]
      ]);
      setupCargos([])
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

  describe('player push cargo', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ]);
    });
    it('should push cargo to right', () => {
      const { player, movePlayerToRight } = usePlayerStore();
      const { cargos, setupCargos } = useCargoStore();


      player.x = 1;
      player.y = 1;
      setupCargos([{ x: 2, y: 1 }]);
      movePlayerToRight();
      expect(player.x).toBe(2);
      expect(cargos[0].x).toBe(3)


      player.x = 4;
      player.y = 1;
      setupCargos([{ x: 5, y: 1 }]);
      movePlayerToRight();
      expect(player.x).toBe(4);
      expect(cargos[0].x).toBe(5);
    })
    it('should push cargo to left', () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      const { cargos, setupCargos } = useCargoStore();


      player.x = 5;
      player.y = 1;
      setupCargos([{ x: 4, y: 1 }]);
      movePlayerToLeft();
      expect(player.x).toBe(4);
      expect(cargos[0].x).toBe(3)


      player.x = 2;
      player.y = 1;
      setupCargos([{ x: 1, y: 1 }]);
      movePlayerToLeft();
      expect(player.x).toBe(2);
      expect(cargos[0].x).toBe(1);
    })
    it('should push cargo to down', () => {
      const { player, movePlayerToDown } = usePlayerStore();
      const { cargos, setupCargos } = useCargoStore();


      player.x = 1;
      player.y = 1;
      setupCargos([{ x: 1, y: 2 }]);
      movePlayerToDown();
      expect(player.y).toBe(2);
      expect(cargos[0].y).toBe(3)


      player.x = 1;
      player.y = 4;
      setupCargos([{ x: 1, y: 5 }]);
      movePlayerToDown();
      expect(player.y).toBe(4);
      expect(cargos[0].y).toBe(5);
    })
    it('should push cargo to up', () => {
      const { player, movePlayerToUp } = usePlayerStore();
      const { cargos, setupCargos } = useCargoStore();


      player.x = 1;
      player.y = 5;
      setupCargos([{ x: 1, y: 4 }]);
      movePlayerToUp();
      expect(player.y).toBe(4);
      expect(cargos[0].y).toBe(3)


      player.x = 1;
      player.y = 2;
      setupCargos([{ x: 1, y: 1 }]);
      movePlayerToUp();
      expect(player.y).toBe(2);
      expect(cargos[0].y).toBe(1);
    })
  })
});
