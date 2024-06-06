import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useTargetStore } from "../target";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";


describe("base target", () => {
    beforeEach(() => {
        setActivePinia(createPinia());

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
    test('setupTargets', () => {
        const { targets, setupTargets } = useTargetStore()
        const newData = [{ x: 5, y: 5 }]
        setupTargets(newData)
        expect(targets).toEqual(newData)
    })
    test('position have target', () => {
        const { targets, setupTargets, isTargetPos } = useTargetStore()
        const newData = [{ x: 5, y: 5 }, { x: 4, y: 4 }]
        setupTargets(newData)
        expect(isTargetPos({ x: 4, y: 4 })).toBe(true)
    })
})

