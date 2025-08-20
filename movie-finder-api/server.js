require("dotenv").config()

const express = require("express")

const movieRoutes = require("./routes/movieRoutes")
const rootRoute = require("./routes/rootRoute")

const PORT = process.env.PORT || 3000

const app = express()

// Middleware
app.use("/api", movieRoutes)
app.use("/", rootRoute)

// Listen
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
