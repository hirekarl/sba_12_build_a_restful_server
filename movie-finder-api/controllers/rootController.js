const serveRoot = (req, res) => {
  res.send(
    "<p>Why don't you try <a href='/api/search?title=Blade Runner 2049'>searching for &ldquo;Blade Runner 2049&rdquo;</a>?</p><p>Or maybe <a href='/api/movies/tt1856101'>get details for the movie with id &ldquo;tt1856101&rdquo;</a>?</p>"
  )
}

module.exports = { serveRoot }
