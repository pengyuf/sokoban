import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { usePlayerStore } from "../player";

describe("player", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it("should move left", () => {
        const { player, movePlayerToLeft } = usePlayerStore();
        player.x = 1
        player.y = 1
        movePlayerToLeft()
        expect(player.x).toBe(0)
    });
    it("should move right", () => {
        const { player, movePlayerToRight } = usePlayerStore();
        player.x = 1
        player.y = 1
        movePlayerToRight()
        expect(player.x).toBe(2)
    });
    it("should move Down", () => {
        const { player, movePlayerToDown } = usePlayerStore();
        player.x = 1
        player.y = 1
        movePlayerToDown()
        expect(player.y).toBe(2)
    });
    it("should move up", () => {
        const { player, movePlayerToUp } = usePlayerStore();
        player.x = 1
        player.y = 1
        movePlayerToUp()
        expect(player.y).toBe(0)
    });
});
