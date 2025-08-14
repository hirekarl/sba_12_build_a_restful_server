require("dotenv").config()

const express = require("express")

const searchMovies = require("./controllers/movieController")
const getMovieDetails = require("./controllers/movieController")

const PORT = 3001
const OMDB_API_KEY = process.env.OMDB_API_KEY

const app = express()

// Routes
app.route("/api/search", (req, res) => {
  searchMovies()
  res.send("<p>/api/search</p>")
})

app.route("/api/movies/:id", (req, res) => {
  getMovieDetails()
  res.send("<p>/api/movies/:id</p>")
})

// Listen
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
