const fs = require("fs");

const DadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = {id: '3', nome: "Livro doido"}

fs.writeFileSync("livros.json",JSON.stringify([...DadosAtuais, novoDado]))



console.log(JSON.parse(fs.readFileSync("livros.json")))