<script setup lang="ts">
import DynamicComponent from '../components/DynamicComponent.vue';
import MyPokemon from '@/components/MyPokemon.vue';
</script>
<template>
    <div id="Home">
        <main>
            <DynamicComponent element="div">
                <p>Hello, world!</p>
            </DynamicComponent>
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
