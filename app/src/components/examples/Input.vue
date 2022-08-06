<script setup lang="ts">
import { computed, ref } from 'vue';

const message = ref('Welcome to the Vue.js cookbook');
const username = ref('');

// validation if username is empty
const error = computed(() => {
    return username.value.trim().length <= 0;
});
</script>

<template>
    <div>
        <div data-testid="_message" class="message">
            {{ message }}
        </div>
        Enter your username:
        <label for="username">Username:</label>
        <input v-model="username" id="username" name="username" />
        <div data-testid="_usernameError" v-if="error" class="error">
            username is required
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
