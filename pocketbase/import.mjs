import {pb} from "./backend.mjs"
import books from "./books.json" assert { type: 'json' };

for (const aBook of books) {
    //console.log(aBook);
    await pb.collection("books").create(aBook)
}
