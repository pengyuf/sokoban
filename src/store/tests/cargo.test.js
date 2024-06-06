import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useCargoStore } from "../cargo";
import { useMapStore } from "../map";


describe("base cargo", () => {
    beforeEach(() => {
        setActivePinia(createPinia());

        const { setupCargos } = useCargoStore()
        setupCargos([{ x: 3, y: 3 }, { x: 4, y: 4 }])
    });
    it('setupCargos', () => {
        const { cargos } = useCargoStore()
        expect(cargos).toEqual([{ x: 3, y: 3 }, { x: 4, y: 4 }])
    })
    it("is cargo", () => {
        const { isCargo } = useCargoStore()
        const pos = { x: 4, y: 4 }
        expect(isCargo(pos)).not.toBe(-1)
    });
    it("get cargos", () => {
        const { setupCargos, getCargos } = useCargoStore()
        setupCargos([{ x: 3, y: 3 }, { x: 4, y: 4 }])
        expect(getCargos()).toEqual([{ x: 3, y: 3 }, { x: 4, y: 4 }])
    });
});


describe("cargo move", () => {
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
    describe('cargo move normal', () => {
        beforeEach(() => {
            const { setupCargos } = useCargoStore()
            setupCargos([{ x: 3, y: 3 }])
        })
        it('cargo move left', () => {
            const { cargos, cargoMoveLeft } = useCargoStore()
            const index = 0
            cargoMoveLeft(index)
            expect(cargos[index]).toEqual({ x: 2, y: 3 })
        })
        it('cargo move right', () => {
            const { cargos, cargoMoveRight } = useCargoStore()
            const index = 0
            cargoMoveRight(index)
            expect(cargos[index]).toEqual({ x: 4, y: 3 })
        })
        it('cargo move Down', () => {
            const { cargos, cargoMoveDown } = useCargoStore()
            const index = 0
            cargoMoveDown(index)
            expect(cargos[index]).toEqual({ x: 3, y: 4 })
        })
        it('cargo move Up', () => {
            const { cargos, cargoMoveUp } = useCargoStore()
            const index = 0
            cargoMoveUp(index)
            expect(cargos[index]).toEqual({ x: 3, y: 2 })
        })
    })

    describe('cargo with wall or box', () => {
        it('cargo move left with wall or box', () => {
            const { cargos, cargoMoveLeft, setupCargos } = useCargoStore()
            setupCargos([{ x: 1, y: 1 }, { x: 2, y: 1 }])
            cargoMoveLeft(0)
            expect(cargos[0]).toEqual({ x: 1, y: 1 })
            cargoMoveLeft(1)
            expect(cargos[1]).toEqual({ x: 2, y: 1 })
        })
        it('cargo move right with wall or box', () => {
            const { cargos, cargoMoveRight, setupCargos } = useCargoStore()
            setupCargos([{ x: 4, y: 1 }, { x: 5, y: 1 }])
            cargoMoveRight(0)
            expect(cargos[0]).toEqual({ x: 4, y: 1 })
            cargoMoveRight(1)
            expect(cargos[1]).toEqual({ x: 5, y: 1 })
        })
        it('cargo move down with wall or box', () => {
            const { cargos, cargoMoveDown, setupCargos } = useCargoStore()
            setupCargos([{ x: 1, y: 4 }, { x: 1, y: 5 }])
            cargoMoveDown(0)
            expect(cargos[0]).toEqual({ x: 1, y: 4 })
            cargoMoveDown(1)
            expect(cargos[1]).toEqual({ x: 1, y: 5 })
        })
        it('cargo move up with wall or box', () => {
            const { cargos, cargoMoveUp, setupCargos } = useCargoStore()
            setupCargos([{ x: 1, y: 1 }, { x: 1, y: 2 }])
            cargoMoveUp(0)
            expect(cargos[0]).toEqual({ x: 1, y: 1 })
            cargoMoveUp(1)
            expect(cargos[1]).toEqual({ x: 1, y: 2 })
        })
    })

});