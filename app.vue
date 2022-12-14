<script setup>
const { data: joke, refresh } = useFetch('/api/jokes');

const showDelivery = ref(false);

function handleDelivery() {
  showDelivery.value = !showDelivery.value;
}

function getNewData() {
  handleDelivery();
  refresh();
}
</script>

<template>
  <div class="container">
    <article>{{ joke.setup }}</article>
    <article v-if="showDelivery">{{ joke.delivery }}</article>
    <button v-if="!showDelivery" @click="handleDelivery">Tell me</button>
    <button v-if="showDelivery" @click="getNewData">New Joke</button>
  </div>
</template>

<style>
@import '@picocss/pico';
</style>
