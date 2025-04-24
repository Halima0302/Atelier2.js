//CLASSES
class User {
    constructor(id, nom) {
      this.id = id;
      this.nom = nom;
    }
  }
  
  class Post {
    constructor(id, titre, contenu, auteurId) {
      this.id = id;
      this.titre = titre;
      this.contenu = contenu;
      this.auteurId = auteurId;
    }
  }
  
  class Blog {
    constructor() {
      this.users = [];
      this.posts = [];
    }
  
    ajouterUser(user) {
      this.users.push(user);
    }
  
    ajouterPost(post) {
      this.posts.push(post);
    }
  
    listerPosts() {
      return this.posts;
    }
  
    toJSON() {
      return JSON.stringify({
        users: this.users,
        posts: this.posts
      });
    }
  
    static fromJSON(jsonStr) {
      let data = JSON.parse(jsonStr);
      let blog = new Blog();
      blog.users = data.users.map(u => new User(u.id, u.nom));
      blog.posts = data.posts.map(p => new Post(p.id, p.titre, p.contenu, p.auteurId));
      return blog;
    }
  }
//
let blog = new Blog();

let user1 = new User(1, "Salah");
let user2 = new User(2, "Farah");
blog.ajouterUser(user1);
blog.ajouterUser(user2);

let post1 = new Post(101, "Bonjour le monde", "Ceci est mon premier post", 1);
let post2 = new Post(102, "JavaScript rocks", "ES6 est puissant", 2);
blog.ajouterPost(post1);
blog.ajouterPost(post2);

// JSON
let jsonData = blog.toJSON();
console.log("JSON sauvegardé :", jsonData);

// Reconvertir en objet
let blog2 = Blog.fromJSON(jsonData);
console.log("Posts rechargés :", blog2.listerPosts());
