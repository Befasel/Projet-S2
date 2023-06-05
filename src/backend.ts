import PocketBase from 'pocketbase';
import type { MoviesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function RandomMovies() {
    const records = await pb.collection('movies').getList<MoviesResponse>(1, 1, { sort: '@random' })
    return records
}

export async function getOneMovies() {
  return await pb.collection('movies').getOne<MoviesResponse>('zpaysz48lnbc1s1')
}