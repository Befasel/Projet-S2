import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function RandomMovies() {
   try {
    const records = await pb.collection('movies').getList(1, 1, { sort: '@random' })
    console.log(JSON.stringify(records, null, 2));
  } catch (e) {
    console.error(e);
  }
}