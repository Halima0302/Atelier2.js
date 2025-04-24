//Question1.
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
  }
  //Question2.
  let voitures = [
    new Voiture("Model S", "Tesla", 2020, "berline", "électrique"),
    new Voiture("Elantra", "Hyundai", 2018, "compact", "essence"),
    new Voiture("Focus", "Ford", 2016, "compact", "diesel")
  ];
//Question3.
function Hyundai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
  }
  
  Hyundai.prototype = Object.create(Voiture.prototype);
  Hyundai.prototype.alarmer = function() {
    console.log("Alarme Hyundai activée !");
  };
  
  function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
  }
  
  Ford.prototype = Object.create(Voiture.prototype);
//Question4.
voitures.sort((a, b) => a.annee - b.annee);
console.log(voitures);
