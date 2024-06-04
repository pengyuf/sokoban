import { onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";

export function useMove() {
    const { movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp } = usePlayerStore()

    function handleKeyup(e) {
        switch (e.key) {
            case 'ArrowLeft':
                movePlayerToLeft()
                break;
            case 'ArrowRight':
                movePlayerToRight()
                break;
            case 'ArrowDown':
                movePlayerToDown()
                break;
            case 'ArrowUp':
                movePlayerToUp()
                break;
        }
    }


    onMounted(() => {
        window.addEventListener('keyup', handleKeyup)
    })

    onUnmounted(() => {
        window.removeEventListener('keyup', handleKeyup)
    })
}