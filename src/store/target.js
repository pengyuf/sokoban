import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTargetStore = defineStore("target", () => {
    const targets = reactive([{ x: 4, y: 4 }, { x: 3, y: 4 }])

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