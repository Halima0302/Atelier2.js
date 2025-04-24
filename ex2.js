//Question1.
let etudiant = {
    nom: "BENNANI",
    prenom: "ALI",
    age: 20,
    cne: "CNE123456"
  };
  
  let professeur = {
    nom: "MARWAN",
    age: 45,
    cin: "CIN234567"
  };
  //Question2.
  etudiant.etudier = function() {
    console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
  };
  
  professeur.enseigner = function() {
    console.log(`${this.nom} enseigne en classe.`);
  };
//Question3.
let etudiants = [
    { nom: "Alami", prenom: "Ahmed", age: 21 },
    { nom: "Benali", prenom: "Leila", age: 22 },
    { nom: "Aithmed", prenom: "Youssef", age: 20 }
  ];
  
  etudiants.sort((a, b) => {
    if (a.nom !== b.nom) return a.nom.localeCompare(b.nom);
    if (a.prenom !== b.prenom) return a.prenom.localeCompare(b.prenom);
    return a.age - b.age;
  });
  
  console.log(etudiants);
  