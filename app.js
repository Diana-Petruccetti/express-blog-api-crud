const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/* Il mio codice */
/* Primo endpoint */
const menu = require('./db/menu.js')

app.get('/cibo', (req, res) => {
    res.json({
      data: menu,
      count: menu.length
    })
  });

/* Secondo endpoint */
app.get('/cibo/:id', (req, res) => {
    const ciambellone = menu.find((ciambellone) => ciambellone.id === parseInt(req.params.id))
    if (!ciambellone) {
    return res.status(404).json({ error: "No ciambellone found with that id" })
    }
  return res.status(200).json({ data: ciambellone })
});