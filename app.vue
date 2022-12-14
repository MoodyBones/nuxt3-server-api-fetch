<script setup>
const { data: joke, refresh } = useFetch('/api/jokes');

const showDelivery = ref(false);

function toggleDelivery() {
  showDelivery.value = !showDelivery.value;
}

function getNewJoke() {
  toggleDelivery();
  refresh();
}
</script>

<template>
  <div class="container">
    <article>{{ joke.setup }}</article>
    <article v-if="showDelivery">{{ joke.delivery }}</article>
    <button v-if="!showDelivery" @click="toggleDelivery">Tell me</button>
    <button v-if="showDelivery" @click="getNewJoke">New Joke</button>
  </div>
</template>

<style>
@import '@picocss/pico';
</style>
