const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const axios = require("axios")

const OMDB_API_KEY = process.env.OMDB_API_KEY
const ENDPOINT = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`

const searchMovies = async (title) => {
  console.log(`API Key: ${OMDB_API_KEY}`)
  const url = `${ENDPOINT}t=${title}`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    return "<p>Oops! There was an error. Check the console for details.</p>"
  }
}

const getMovieDetails = async (id) => {
  const url = `${ENDPOINT}i=${id}`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    return "<p>Oops! There was an error. Check the console for details.</p>"
  }
}

module.exports = { searchMovies, getMovieDetails }
