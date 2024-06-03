<template>
    <div>
        {{ map }}
        <h1 className="text-3xl font-bold underline bg-red-500">
            Hello world!
        </h1>
    </div>
</template>

<script setup>
import { useMapStore } from './store'

const { map } = useMapStore()

</script>
