<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currencyStore.js';
import { storeToRefs } from 'pinia';

const currencyStore = useCurrencyStore();
const { currency } = storeToRefs(currencyStore);
</script>

<template>
    <div>
        <input type="text" data-testid="_currency" v-model="currency" />
    </div>
</template>

<style lang="scss" scoped></style>
