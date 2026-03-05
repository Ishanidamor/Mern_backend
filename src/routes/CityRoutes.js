    const router = require("express").Router()
    const CityController = require("../controllers/CityController")
    router.get("/cities",CityController.getAllCities)
    router.post("/addcity",CityController.addCity)
    router.get("/cities/:id",CityController.getCityById)
    router.delete("/cities/:id",CityController.deleteCity)
module.exports = router