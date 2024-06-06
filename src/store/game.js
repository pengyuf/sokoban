import { useCargoStore } from "./cargo"
import { useTargetStore } from "./target"

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