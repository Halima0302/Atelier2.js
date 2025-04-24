class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Vecteur(${this.x}, ${this.y})`);
    }
  
    ajouter(autre) {
      return new Vecteur2D(this.x + autre.x, this.y + autre.y);
    }
  }
  
 
  let v1 = new Vecteur2D();
  let v2 = new Vecteur2D(3, 4);
  v1.afficher();
  v2.afficher();
  let somme = v1.ajouter(v2);
  somme.afficher();
//
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
      this.nom = "rectangle";
      this.longueur = longueur;
      this.largeur = largeur;
    }
  
    afficher() {
      console.log(`${this.nom} - Longueur : ${this.longueur}, Largeur : ${this.largeur}`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  class Carre extends Rectangle {
    constructor(cote = 1) {
      super(cote, cote);
      this.nom = "carré";
    }
  }
  
 
  let r = new Rectangle(3, 5);
  let c = new Carre(4);
  r.afficher();
  c.afficher();
  console.log("Surface rectangle :", r.surface());
  console.log("Surface carré :", c.surface());
//
class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1);
      this.extrem = new Point(x2, y2);
    }
  
    afficher() {
      console.log(`Segment de (${this.orig.x}, ${this.orig.y}) à (${this.extrem.x}, ${this.extrem.y})`);
    }
  }
  
  let s = new Segment(1, 2, 4, 6);
  s.afficher();
  