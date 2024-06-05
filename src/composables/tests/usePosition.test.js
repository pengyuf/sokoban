import { beforeEach, describe, expect, it, test } from "vitest";
import { usePosition } from "../usePosition";
import { reactive } from "vue";


test('usePosition', () => {
    const pos = {
        x: 1,
        y: 1
    }
    const { postion } = usePosition(pos)

    expect(postion.value).toEqual({
        left: '32px',
        top: '32px'
    })
})

test('when reactive data change position also change', () => {
    const pos = reactive({
        x: 1,
        y: 1
    })
    const { postion } = usePosition(pos)

    expect(postion.value).toEqual({
        left: '32px',
        top: '32px'
    })

    pos.x = 2

    expect(postion.value).toEqual({
        left: '64px',
        top: '32px'
    })
})