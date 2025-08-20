const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const axios = require("axios")

const OMDB_API_KEY = process.env.OMDB_API_KEY
const BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`

class APIError extends Error {
  constructor(message) {
    super(message)
    this.name = "APIError"
  }
}

const runRequest = async (res, url) => {
  try {
    const response = await axios.get(url)

    if ("Search" in response.data) {
      return res.json(response.data["Search"])
    } else if ("Error" in response.data) {
      throw new APIError(response.data["Error"])
    }

    return res.json(response.data)
  } catch (error) {
    if (error instanceof APIError) {
      return res.status(400).json({ error: `${error.name}: ${error.message}` })
    } else {
      return res.status(500).json({ error: `${error.name}: ${error.message}` })
    }
  }
}

const searchMovies = async (req, res) => {
  const title = req.query.title

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required." })
  }

  const url = `${BASE_URL}s=${title}&type=movie`

  await runRequest(res, url)
}

const getMovieDetails = async (req, res) => {
  const id = req.params.id
  const url = `${BASE_URL}i=${id}&type=movie`

  await runRequest(res, url)
}

module.exports = { searchMovies, getMovieDetails }
