module.exports = {
    index: (req, res) => {
        res.send('​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')

    },

    creditos: (req, res) => {
        res.send("Lucas Herlan")
    },
    error:(req, res) => {
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')}

}

