<template>
    <div class="editer-box">
        <div class="editer-opt-box">
            <div v-for="(row, i) in editPanel" :key="i" class="flex">
                <div v-for="(col, j) in row" :key="j">
                    <div class="panel-item" @click="clickTile(i, j)">
                        <img v-if="col == 1" :src="wallImg" />
                        <img v-if="col == 2" :src="floorImg" />
                        <img v-if="col == 3" :src="keeperImg" />
                        <img v-if="col == 4" :src="cargoImg" />
                        <img v-if="col == 5" :src="targetImg" />
                    </div>
                </div>
            </div>
            <div>
                当前选择的方块：{{ activeBlock }}
            </div>
            <div class="block-box">
                <div class="block-item" @click="changeActiveBlock('wall')">
                    <img :src="wallImg" />
                </div>
                <div class="block-item" @click="changeActiveBlock('floor')">
                    <img :src="floorImg" />
                </div>
                <div class="block-item" @click="changeActiveBlock('keeper')">
                    <img :src="keeperImg" />
                </div>
                <div class="block-item" @click="changeActiveBlock('cargo')">
                    <img :src="cargoImg" />
                </div>
                <div class="block-item" @click="changeActiveBlock('target')">
                    <img :src="targetImg" />
                </div>
            </div>
            <div>
                <span class="button" @click="generateGameData">生成游戏数据</span>
            </div>
        </div>

        <div class="editer-show-box">
            <div>
                let map = [
                <div v-for="(row, i) in generateData.map" :key="i">
                    [
                    <span v-for="(col, j) in row" :key="j">
                        {{ generateData.map[i][j] }}<span v-if="j != row.length - 1">,</span>
                    </span>
                    ],
                </div>
                ]
            </div>
            <div>
                const player = reactive({
                x: {{ generateData.player.x }},
                y: {{ generateData.player.y }},
                })
            </div>
            <div>
                let cargos = reactive([
                <div v-for="(item, index) in generateData.cargos" :key="index">
                    {x: {{ item.x }}, y: {{ item.y }}},
                </div>
                ])
            </div>
            <div>
                let targets = reactive([
                <div v-for="(item, index) in generateData.targets" :key="index">
                    {x: {{ item.x }}, y: {{ item.y }}},
                </div>
                ])
            </div>
        </div>
    </div>
</template>

<script setup>
import wallImg from './../../assets/wall.png'
import floorImg from './../../assets/floor.png'
import keeperImg from './../../assets/keeper.png'
import cargoImg from '../../assets/cargo.png'
import targetImg from './../../assets/target.png'
import { reactive, ref } from 'vue'


let editPanel = reactive([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
])

const activeBlock = ref('wall')

const generateData = reactive({
    map: [],
    player: {},
    cargos: [],
    targets: [],
})

function changeActiveBlock(type) {
    activeBlock.value = type
}

function clickTile(i, j) {
    if (!activeBlock.value) {
        alert('请先选择方块')
        return
    }


    if (editPanel[i][j] !== 2) {
        editPanel[i][j] = 2
        return
    }

    let value = 0
    switch (activeBlock.value) {
        case 'wall':
            value = 1
            break
        case 'floor':
            value = 2
            break
        case 'keeper':
            value = 3
            break
        case 'cargo':
            value = 4
            break
        case 'target':
            value = 5
            break
    }

    editPanel[i][j] = value
}

function generateGameData() {
    let map = []
    let player = {}
    let cargos = []
    let targets = []
    editPanel.forEach((row, i) => {
        let _row = []
        map.push(_row)
        row.forEach((col, j) => {
            if (editPanel[i][j] == 3) {
                player.x = j
                player.y = i
                _row[j] = 2
            }
            if (editPanel[i][j] == 4) {
                cargos.push({ x: j, y: i })
                _row[j] = 2
            }
            if (editPanel[i][j] == 5) {
                targets.push({ x: j, y: i })
                _row[j] = 2
            }
            if (editPanel[i][j] == 2) {
                _row[j] = 2
            }
            if (editPanel[i][j] == 1) {
                _row[j] = 1
            }
        })
    })
    if (cargos.length == 0) {
        alert('请添加箱子')
        return
    }
    if (targets.length == 0) {
        alert('请添加目标点')
        return
    }
    if (cargos.length !== targets.length) {
        alert('请确保箱子和目标点数量一致')
        return
    }
    generateData.map = map
    generateData.player = player
    generateData.cargos = cargos
    generateData.targets = targets
}

</script>
<style scoped lang="scss">
.editer-box {
    display: flex;

    .editer-opt-box {
        .panel-item {
            width: 32px;
            height: 32px;
            background: rgba(255, 0, 0, .5);
            margin: 1px;
            cursor: pointer;
        }

        .block-box {
            display: flex;
            margin-top: 20px;

            .block-item {
                img {
                    margin-right: 2px;
                    cursor: pointer;
                }
            }

        }

        .button {
            display: inline-block;
            margin-top: 20px;
            background: green;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
    }

    .editer-show-box {
        margin-left: 40px;
        height: 400px;
        overflow-y: auto;
    }
}
</style>