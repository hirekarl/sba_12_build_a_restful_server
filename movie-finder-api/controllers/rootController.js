const serveRoot = (_req, res) => {
  res.sendFile("/index.html")
}

module.exports = serveRoot
