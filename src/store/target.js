import { defineStore } from "pinia";
import { useGameStore } from "./game";
import { reactive } from "vue";

export const useTargetStore = defineStore("target", () => {
    const { targets } = useGameStore()

    function setupTargets(newTargets) {
        targets.splice(0, targets.length, ...newTargets)
    }

    function isTargetPos(pos) {
        return targets.some(target => target.x === pos.x && target.y === pos.y)
    }

    return {
        targets,
        setupTargets,
        isTargetPos
    }
})