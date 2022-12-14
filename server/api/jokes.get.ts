export default defineEventHandler(async (event) => {
  const result = await $fetch('https://v2.jokeapi.dev/joke/christmas');
  return result;
});
