<script setup lang="ts">
import type { Movie } from '../types'

defineProps<{
  movie: Movie
}>()
</script>

<template>
  <div>
    <img :alt="movie.name" :src="movie?.image?.medium" />
    <div>
      <p>{{ movie.name }}</p>
    </div>
  </div>
</template>