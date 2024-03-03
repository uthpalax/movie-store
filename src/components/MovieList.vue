<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import MovieCard from './MovieCard.vue'
import type { Movie } from '@/types';


const props = defineProps<{ data: Movie[]}>()

const breakpoints = ref({
  0: {
    itemsToShow: 1,
    snapAlign: 'start'
  },
  640: {
    itemsToShow: 2,
    snapAlign: 'start'
  },
  768: {
    itemsToShow: 3,
    snapAlign: 'start'
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start'
  }
})
</script>

<template>
  <Carousel :breakpoints="breakpoints">
    <Slide v-for="movie in props.data" :key="movie.id">
      <RouterLink :to="`/movie/${movie.id}`">
        <MovieCard :movie="movie" />
      </RouterLink>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
