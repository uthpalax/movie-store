<script setup lang="ts">
import type { Movie } from './MovieList.vue';

defineProps<{
  episode: Movie
}>()
</script>

<template>
  <div class="bg-black text-white">
    <img :src="episode?.image?.medium" />
    <div>
      <p class="p-2"> {{  episode.name }}</p>
    </div>
  </div>
</template>
