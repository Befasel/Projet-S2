<script setup lang="ts">
import { pb } from '@/backend'
import type { MoviesResponse } from '@/pocketbase-types';
import Card from '@/components/moviesCard.vue';
import { ref } from 'vue';

let movieListe: MoviesResponse[] = [];
let randomMovie: MoviesResponse | null = null;
const showRandomMovie = ref(false);

const fetchMovieList = async () => {
    movieListe = await pb.collection('movies').getFullList<MoviesResponse>();
    randomMovie = movieListe[Math.floor(Math.random() * movieListe.length)];
    console.log("le film aléatoire", randomMovie);
};

const displayRandomMovie = () => {
    showRandomMovie.value = true;
};

fetchMovieList();
</script>

<template>
    <div class="mt-24">
        <button @click="displayRandomMovie">Spin IT</button>
        <Card v-if="showRandomMovie" v-bind="{ ...randomMovie }" />
    </div>
</template>
