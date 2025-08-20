const express = require("express")
const router = express.Router()

const { serveRoot } = require("../controllers/rootController")

router.get("/", serveRoot)

module.exports = router
