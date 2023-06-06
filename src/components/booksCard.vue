<script setup lang="ts">
import { pb } from '@/backend'
import type { BooksResponse } from '@/pocketbase-types';

const MoviesInfo: BooksResponse = defineProps<BooksResponse>();
</script>
<template>
    <p>{{ title }}</p>
    <p>{{ authors }}</p>
    <p>{{ average_rating }}</p>
</template>