    const router = require("express").Router()
    const StateController = require("../controllers/StateController")
    router.get("/states",StateController.getAllStates)
    router.post("/addstate",StateController.addState)
    router.get("/states/:id",StateController.getStateById)
    router.delete("/states/:id",StateController.deleteState)
module.exports = router