const { Router } = require("express");
const express =require("express");
const routerHeroes =require("../controllers/heroesController");
const router =express.Router()

router.get("/heroes",routerHeroes.heroe)
router.get("/heroes/detalles/:id", routerHeroes.detalles)
router.get("/heroes/bio/:id/:ok?",routerHeroes.bio)

module.exports= router