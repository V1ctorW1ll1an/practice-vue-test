<script setup lang="ts">
import DynamicComponent from '../components/DynamicComponent.vue';
</script>
<template>
    <div id="Home">
        <main>
            <DynamicComponent element="div">
                <p>Hello, world!</p>
            </DynamicComponent>
            <MyPokemon />
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
