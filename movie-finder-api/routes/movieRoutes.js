const express = require("express")
const router = express.Router()

const movieController = require("../controllers/movieController")

router.get("/search", async (req, res) => {
  const query = req.query.title
  const results = await movieController.searchMovies(query)
  res.send(results)
})

router.get("/movies/:id", async (req, res) => {
  const id = req.params.id
  const details = await movieController.getMovieDetails(id)
  res.send(details)
})

module.exports = router
