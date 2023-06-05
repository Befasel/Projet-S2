<script setup lang="ts">
import { pb } from '@/backend'
import type { MoviesResponse } from '@/pocketbase-types';
const MoviesInfo = defineProps<MoviesResponse>();
const img = MoviesInfo.attach
const urlImg = img && pb.getFileUrl(MoviesInfo, img, { thumb: '100x200' })
</script>
<template>
    <img :src="urlImg" />
    <p>{{ title }}</p>
    <p>{{ filmer }}</p>
</template>