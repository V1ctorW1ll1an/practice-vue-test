<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currencyStore.js';
import { storeToRefs } from 'pinia';

const currencyStore = useCurrencyStore();
const { calcDailyCurrency, calcTotalCurrency } = currencyStore;
const { currency, days, dailyCurrency } = storeToRefs(currencyStore);
</script>

<template>
    <p>dias</p>
    <input type="text" data-testid="_days" v-model="days" />
    <p>moeda</p>
    <input
        @input="calcDailyCurrency()"
        type="text"
        data-testid="_currency"
        v-model="currency"
    />
    <p>moeda diária</p>
    <input
        @input="calcTotalCurrency()"
        type="text"
        data-testid="_dailyCurrency"
        v-model="dailyCurrency"
    />
</template>

<style lang="scss" scoped></style>
