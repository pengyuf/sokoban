import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { useGameStore } from "./game";
import { reactive } from "vue";

export const useCargoStore = defineStore("cargo", () => {
    const { cargos } = useGameStore()

    function setupCargos(newCargos) {
        cargos.splice(0, cargos.length, ...newCargos)
    }

    function isCargo(pos) {
        let index = -1
        cargos.forEach((cargo, i) => {
            if (cargo.x === pos.x && cargo.y === pos.y) {
                index = i
            }
        })
        return index
    }

    function getCargos() {
        return cargos
    }

    function canMoveCargo(pos) {
        const { isWall } = useMapStore()

        // 前面是墙
        if (isWall(pos)) return false

        // 前面是箱子
        if (isCargo(pos) > -1) return false

        return true
    }

    function cargoMoveLeft(index) {
        const nextPos = {
            x: cargos[index].x - 1,
            y: cargos[index].y
        }

        if (!canMoveCargo(nextPos)) {
            return false
        }

        cargos[index].x--
        return true
    }

    function cargoMoveRight(index) {
        const nextPos = {
            x: cargos[index].x + 1,
            y: cargos[index].y
        }

        if (!canMoveCargo(nextPos)) {
            return false
        }

        cargos[index].x++
        return true
    }
    function cargoMoveDown(index) {
        const nextPos = {
            x: cargos[index].x,
            y: cargos[index].y + 1
        }

        if (!canMoveCargo(nextPos)) {
            return false
        }
        cargos[index].y++
        return true
    }
    function cargoMoveUp(index) {
        const nextPos = {
            x: cargos[index].x,
            y: cargos[index].y - 1
        }
        if (!canMoveCargo(nextPos)) {
            return false
        }
        cargos[index].y--
        return true
    }

    return {
        cargos,
        setupCargos,
        getCargos,
        isCargo,
        cargoMoveLeft,
        cargoMoveRight,
        cargoMoveDown,
        cargoMoveUp
    }
})