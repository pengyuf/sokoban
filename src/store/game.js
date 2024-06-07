import { nextTick, reactive, watch } from "vue";
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
    let isBacking = false
    let gameHistory = []
    let map = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    let targets = reactive([
        { x: 5, y: 2 },
    ])

    const player = reactive({ x: 2, y: 3, })
    let cargos = reactive({
        arr: [
            { x: 5, y: 5 },
        ]
    })

    watch([() => player.x, () => player.y], ([newX, newY], [oldX, oldY]) => {
        if (!isBacking) {
            gameHistory.push({ player: { x: oldX, y: oldY } })
        }
    })

    // 返回上一步(现在只有玩家可以回退，箱子暂不可回退)
    function backStep() {
        if (gameHistory.length > 0) {
            isBacking = true
            const lastStep = gameHistory.pop()
            player.x = lastStep.player.x
            player.y = lastStep.player.y
            nextTick(() => {
                isBacking = false
            })
        }
    }

    // 重置游戏
    function resetGame() {

    }

    return {
        map,
        player,
        cargos: cargos.arr,
        targets,
        backStep,
        resetGame
    }
})