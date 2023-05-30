const { Router } = require("express");
const { getLivros } = require("../controllers/livro")
const { getLivro} = require("../controllers/livro")

const router = Router();

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req,res) => {
    res.send("VOCE ESTA UTILIZANDO METODO POST")
})

router.delete('/', (req,res) => {
    res.send("VOCE ESTA UTILIZANDO METODO DELETE")
})

router.patch('/',  (req,res) => {
    res.send("VOCE ESTA UTILIZANDO METODO PATCH")
})


module.exports = router;