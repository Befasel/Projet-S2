import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allfilm() {
    const listefilm = await pb.collection("film").getFullList() ;
    return listefilm;
}

export async function Allbooks() {
    const listebooks = await pb.collection("books").getFullList();
    return listebooks;
}

export async function filmById(id) {
    const aFilm = await pb.collection('film').getOne(id);
    return aFilm;
}

export async function booksById(id) {
    const aBooks = await pb.collection('books').getOne(id);
    return aBooks;
}

export async function seriesById(id) {
    const aSeries = await pb.collection('series').getOne(id);
    return aSeries;
}

export async function AllfilmByDate(){
    const filmDate = await pb.collection('film').getFullList({
        sort : "Released_Year",
    });
    return filmDate
}

export async function allseriesByRunt(){
    const seriesRunt = await pb.collection('books').getFullList({
        sort : "Runtime_of_Series",
    });
    return seriesRunt
}