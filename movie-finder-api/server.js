require("dotenv").config()

const express = require("express")

const movieRoutes = require("./routes/movieRoutes")

const { STATIC_ROOT } = require("./utils")

const app = express()

// Middleware
app.use(express.static(STATIC_ROOT))

app.use("/api", movieRoutes)

// Listen
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
