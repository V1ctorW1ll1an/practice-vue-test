<script setup lang="ts">
import DynamicComponent from '../components/DynamicComponent.vue';
import MyPokemon from '@/components/MyPokemon.vue';
import Input from '../components/Input.vue';
import Counter from '../components/Counter.vue';
import CurrencyInput from '../components/CurrencyInput.vue';
</script>
<template>
    <div id="Home">
        <main>
            <DynamicComponent element="div">
                <p>Hello, world!</p>
            </DynamicComponent>
            <Input />
            <Counter />
            <CurrencyInput />
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
