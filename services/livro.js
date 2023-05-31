const fs = require("fs");

function getTodosLivros(){
   return  JSON.parse(fs.readFileSync("livros.json"))
}


function getLivroPorID(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    // [ {id: 2 , nome: "livro irado"}]
    return livroFiltrado;
}


function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json" , JSON.stringify(novaListaDeLivros))
}

function atualizaLivro(atualizador, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoAtualizado = {...livrosAtuais[indiceModificado], ...atualizador}
    // livrosAtuais[IndiceModificado] -> {id: "2", nome: "livro irado"}
    // atualizador ->  {nome: "nome mucho legal"}

    livrosAtuais[indiceModificado] = conteudoAtualizado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

module.exports = {
    getTodosLivros,
    getLivroPorID,
    insereLivro,
    atualizaLivro
}