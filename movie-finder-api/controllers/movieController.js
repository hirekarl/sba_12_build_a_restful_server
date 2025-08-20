const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const axios = require("axios")

const OMDB_API_KEY = process.env.OMDB_API_KEY
const ENDPOINT = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`

const runRequest = async (res, url) => {
  try {
    const response = await axios.get(url)
    res.send(response.data)
  } catch (error) {
    console.error(error)
    res.send("<p>Oops! There was an error. Check the console for details.</p>")
  }
}

const searchMovies = async (req, res) => {
  const title = req.query.title
  const url = `${ENDPOINT}t=${title}`

  await runRequest(res, url)
}

const getMovieDetails = async (req, res) => {
  const id = req.params.id
  const url = `${ENDPOINT}i=${id}`

  await runRequest(res, url)
}

module.exports = { searchMovies, getMovieDetails }
