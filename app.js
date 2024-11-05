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

app.get('/pizze', (req, res) => {
    res.json({
      data: menu,
      count: menu.length
    })
  });

/* Secondo endpoint */
app.get('/pizze/:id', (req, res) => {
    const pizza = menu.find((pizza) => pizza.id === parseInt(req.params.id))
    if (!pizza) {
    return res.status(404).json({ error: "No pizza found with that id" })
    }
  return res.status(200).json({ data: pizza })
});