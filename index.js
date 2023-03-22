const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
var url = require('url');


// const hbs = exphbs.create({
//   partialsDir: ["views/partials/"]
// })

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', function (req, res){
  const user = {
    name: 'Guilherme',
    surname: 'Ferreira',
  };

  res.render('home', {user: user, auth:true});
});
  
app.get("/jogadores/00001", function (req, res) {
  const post = {
    nome: "Daniel",
    classe: "Guerreiro",
    nivel: "10",
    experiencia: 200,
    }
    res.render("00001", {post});
});

app.get("/jogadores/00002", function (req, res) {
  const post = {
    nome: "Julia",
    classe: "Arqueira",
    nivel: "20",
    experiencia: 400,
    }
    res.render("00002", {post});
});

app.get("/jogadores/00003", function (req, res) {
  const post = {
    nome: "Bruno",
    classe: "Mago",
    nivel: "30",
    experiencia: 600,
    }
    res.render("00003", {post});   
});

app.get ("/jogadores", function (req, res){
  const posts = [
    {
      jogador: "Deniel",
      id: "#00001",
    },
    {
      jogador: "Julia",
      id: "#00002",
    },

    {
      jogador: "Bruno",
      id: "#00003",
    },
  ]
  res.render("jogadores", {posts});
});

app.listen(3000)

