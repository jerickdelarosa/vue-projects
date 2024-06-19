<template>
    <h4 class="uppercase m-0 font-semibold">Your Balance</h4>
    <h1 class="m-0 tracking-[1px]" id="balance">₱{{ total }}</h1>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    total: {
        type: Number,
        required: true
    }
})
</script>

<style lang="scss" scoped>
</style>