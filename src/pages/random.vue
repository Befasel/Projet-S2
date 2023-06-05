<script setup lang="ts">
import { getOneMovies, getRandomMovie } from '@/backend'
import Card from '@/components/moviesCard.vue';

const unMovies = await getOneMovies()
console.log("les oeuvres", unMovies);

</script>
<template>
    <div class=" mt-24">
        <div>
            <ul>
                <Card v-bind="unMovies" />
            </ul>
        </div>
    </div>
</template>