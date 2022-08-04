<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
</script>

<template>
    <div>
        <h1>Counter</h1>
        <div data-testid="_counter">{{ counter }}</div>
        <button data-testid="_incrementButton" @click="counter++">
            Increment +1
        </button>
        <button data-testid="_decrementButton" @click="counter--">
            Decrement -1
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
