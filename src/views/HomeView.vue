<script setup lang="ts">
import { computed } from 'vue'
import MovieList from '../components/MovieList.vue'
import { useFetch } from '../hooks/useFetch'
import type { Movie } from '../types'

const { data } = useFetch<Movie[] | undefined>('https://api.tvmaze.com/shows');

const drama = computed(() => data.value?.filter((movie) => movie.genres.includes('Drama')))
const action = computed(() => data.value?.filter((movie) => movie.genres.includes('Action')))
</script>

<template>
  <main>
    <section v-if="drama">
      <h2 class="text-md mb-4">Drama</h2>
      <MovieList :data="drama" />
    </section>
    <section v-if="action">
      <h2 class="text-md mb-4">Action</h2>
      <MovieList :data="action" />
    </section>
  </main>
</template>
