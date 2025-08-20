require("dotenv").config()
const path = require("path")

const express = require("express")
const app = express()

const rootRoute = require("./routes/rootRoute")
const movieRoutes = require("./routes/movieRoutes")

// Middleware
app.use(express.static(path.join(__dirname, "public")))

app.use("/", rootRoute)
app.use("/api", movieRoutes)

// Listen
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
