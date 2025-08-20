const serveRoot = (_req, res) => {
  return res.sendFile("/index.html")
}

module.exports = serveRoot
