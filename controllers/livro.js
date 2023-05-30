function getLivros(req, res) {

    try {
        res.send("Ola thiago")
    } catch(error) {    
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getLivros
}