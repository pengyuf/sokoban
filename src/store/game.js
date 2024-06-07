import { reactive } from "vue";
import { useCargoStore } from "./cargo"
import { useTargetStore } from "./target"
import { defineStore } from "pinia";

export function isFinishGame() {
    const { cargos } = useCargoStore()
    const { targets } = useTargetStore()

    let passNums = 0
    let gameStatus = false

    cargos.forEach(cargo => {
        targets.forEach(target => {
            if (cargo.x === target.x && cargo.y === target.y) {
                passNums++
            }
        })
    })
    if (passNums === targets.length) {
        gameStatus = true
    } else {
        gameStatus = false
    }
    return gameStatus
}

export const useGameStore = defineStore("game", () => {
    let map = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1, 2, 2, 1],
        [1, 2, 2, 2, 1, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    const player = reactive({ x: 2, y: 2, })
    let cargos = reactive([
        { x: 5, y: 3 },
        { x: 3, y: 5 },
    ])
    let targets = reactive([
        { x: 1, y: 6 },
        { x: 6, y: 6 },
    ])

    return {
        map,
        player,
        cargos,
        targets
    }
})