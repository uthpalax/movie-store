<script setup lang="ts">
import { RouterView } from 'vue-router'
import UIInput from './components/ui/UIInput.vue'
import { computed, ref } from 'vue'
import { debounce } from 'lodash';
import MovieList from './components/MovieList.vue';
import type { Movie } from './types';

const search = ref('')
const searchResults = ref();

const searchMovies = debounce(async () => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
  searchResults.value = await res.json();
}, 300)

const formatedResult = computed(() => {
  return searchResults.value?.map((result: {score: number, show: Movie}) => result.show)
})

</script>

<template>
  <div class="container mx-auto px-8">
    <header class="flex justify-between items-center py-4 mb-4 border-b">
      <RouterLink to="/" class="text-lg font-semibold">Movies</RouterLink>
      <UIInput v-model="search" @input="searchMovies"/>
    </header>
    <template  v-if="formatedResult?.length">
    <h1 class="py-4">Search Results</h1>
    <MovieList :data="formatedResult" />
    </template>
    <RouterView />
  </div>
</template>
