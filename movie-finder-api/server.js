const express = require("express")

const {
  searchMovies,
  getMovieDetails,
} = require("./controllers/movieController.js")

const PORT = 3001

const app = express()

// Routes
app.get("/", (req, res) => {
  res.send(
    "<p>Why don't you try <a href='/api/search?title=Dune'>searching for a movie</a>?</p>"
  )
})

app.get("/api/search", async (req, res) => {
  const query = req.query.title
  const results = await searchMovies(query)
  res.send(results)
})

app.get("/api/movies/:id", async (req, res) => {
  const id = req.params.id
  const details = await getMovieDetails(id)
  res.send(details)
})

// Listen
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
