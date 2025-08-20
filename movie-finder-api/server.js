require("dotenv").config()

const express = require("express")

const movieRoutes = require("./routes/movieRoutes")

const PORT = process.env.PORT || 3000

const app = express()

// Middleware
app.use("/api", movieRoutes)

// Routes
app.get("/", (req, res) => {
  res.send(
    "<p>Why don't you try <a href='/api/search?title=Blade Runner 2049'>searching for a movie</a>?</p>"
  )
})

// Listen
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
