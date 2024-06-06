import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useTargetStore } from "../target";
import { useCargoStore } from "../cargo";
import { isFinishGame } from "../game";


describe("base game", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test('is finished Game', () => {
        const { setupTargets } = useTargetStore()
        const { setupCargos } = useCargoStore()
        setupTargets([{ x: 4, y: 4 }, { x: 5, y: 5 }])
        setupCargos([{ x: 4, y: 4 }, { x: 5, y: 5 }])
        expect(isFinishGame()).toBe(true)
    })
})

