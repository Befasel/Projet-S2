import PocketBase from 'pocketbase';
import type { MoviesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function RandomMovies() {
    const records = await pb.collection('movies').getList<MoviesResponse>(1, 1, { sort: '@random' })
    return records
}

export async function getRandomMovie(): Promise<MoviesResponse | null> {
  try {
    const movies = await pb.collection('movies').getFullList<MoviesResponse>()
    const randomIndex = Math.floor(Math.random() * movies.length)
    return movies[randomIndex] as MoviesResponse
  } catch (error) {
    console.error('Erreur lors de la récupération du film aléatoire :', error)
    return null
  }
}

export async function getOneMovies() {
  return await pb.collection('movies').getOne<MoviesResponse>('zpaysz48lnbc1s1')
}