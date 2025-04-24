//QUESTION 1
let books = ["1984", "Le Petit Prince", "Sapiens"];

books.push("Nouveau Livre");
console.log("Après push :", books);

books.unshift("Début Livre");
console.log("Après unshift :", books);

books.pop();
console.log("Après pop :", books);

books.shift();
console.log("Après shift :", books);

//QUESTION 2
let categories = new Set(["Fiction", "Science", "Histoire"]);

categories.add("Philosophie");
console.log("Après add (Philosophie) :", categories);

categories.add("Science"); // Ignoré car déjà présent
console.log("Après tentative d'ajout doublon :", categories);

categories.delete("Histoire");
console.log("Après suppression (Histoire) :", categories);

//QUESTION 3
let borrows = new Map();

borrows.set("1984", "Amine");
borrows.set("Le Petit Prince", "Samia");
borrows.set("Sapiens", "Adil");
console.log("Après ajout :", borrows);

borrows.delete("Sapiens");
console.log("Après suppression (Sapiens) :", borrows);

console.log("Est-ce que '1984' est emprunté ? :", borrows.has("1984"));
