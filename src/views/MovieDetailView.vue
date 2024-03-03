<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Movie, Episode } from '../types';
import { useFetch } from '../hooks/useFetch'
import UITag from '../components/ui/UITag.vue';
import EpisodeCard from '@/components/EpisodeCard.vue';
import { ref, computed, watchEffect } from 'vue';

const movie = ref();
const episodes = ref();
const route = useRoute()

const { data } = useFetch<Movie | undefined>(`https://api.tvmaze.com/shows/${route.params.id}`)
movie.value = data.value;

const { data: episodesResult } = useFetch<Episode[] | undefined>(`https://api.tvmaze.com/shows/${route.params.id}/episodes`)
episodes.value = episodesResult.value


watchEffect(async () => {
  const movieResult = await fetch(`https://api.tvmaze.com/shows/${route.params.id}`)
  movie.value = await movieResult.json();

  const episodesResult = await fetch(`https://api.tvmaze.com/shows/${route.params.id}/episodes`)
  episodes.value = await episodesResult.json()
})

const episodeCount = computed(() => episodes.value?.length)
</script>

<template>
  <h1 class="text-lg font-bold py-4"> {{  movie?.name }}</h1>
  <div class="container">
    <div class="flex-1">
      <img :src="movie?.image.medium" />
    </div>
    <div class="flex-1">
      <UITag v-for="genre in movie?.genres" :label="genre" :key="genre" />
      <p v-html="movie?.summary" />
      <p> Rating {{  movie?.rating?.average }}</p>
      <p> Run time {{  movie?.runtime }} minutes</p>
      <p> Status {{  movie?.status }} </p>
    </div>
  </div>
  <h2>Total Episodes - {{ episodeCount }}</h2>
  <div class="container flex flex-wrap gap-1">
    <EpisodeCard v-for="episode in episodes" :episode="episode" :key="episode.id" />
  </div>
</template>

<style scoped>

.details {
  padding: 1rem;
}

p {
  padding: 0.6rem 0;
}

.container {
  display: flex;

}
</style>
