import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useMove } from "../player";
import { usePlayerStore } from "../../../store/player";
import { withSetup } from './test-utils'

beforeEach(() => {
    setActivePinia(createPinia());
});

it('should move to left when press ArrowLeft', () => {
    const { player } = usePlayerStore()
    player.x = 1
    player.y = 1

    withSetup(() => useMove())

    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' }))
    expect(player.x).toBe(0)
})


