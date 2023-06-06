import {pb} from "./backend.mjs"
import books from "./books.json" assert { type: 'json' };
import series from "./series.json" assert { type: 'json' };

for (const aBook of books) {
    await pb.collection("books").create(aBook)
}

for (const aSerie of series) {
   await pb.collection("series").create(aSerie)
}