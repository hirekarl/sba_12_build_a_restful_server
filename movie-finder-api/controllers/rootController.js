const serveRoot = (req, res) => {
  res.send(
    "<p>Why don't you try <a href='/api/search?title=Blade Runner 2049'>searching for a movie</a>?</p>"
  )
}

module.exports = { serveRoot }
