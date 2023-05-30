const fs = require("fs")
const { getTodosLivros } = require("../services/livro")
const { getLivroPorID  } = require("../services/livro")
function getLivros(req, res) {

    try {
       const livros = getTodosLivros()
       res.send(livros)
    } catch(error) {    
        res.status(500)
        res.send(error.message)
    }
}


function getLivro(req, res) {

    try {  
        const id = req.params.id
        const livro = getLivroPorID(id)
     
       res.send(livro)
    } catch(error) {    
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getLivros,
    getLivro
}