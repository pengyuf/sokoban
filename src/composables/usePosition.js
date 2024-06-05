import {computed} from 'vue'

export function usePosition(pos) {

    const STEP = 32
    const postion = computed(() => {
        return {
            left: pos.x * STEP + 'px',
            top: pos.y * STEP + 'px',
        }
    })

    return {
        postion
    }
}