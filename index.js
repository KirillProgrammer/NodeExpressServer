const express = require('express')
const EHbs = require('express-handlebars')
const fortune = require('./lib/fortune')

const app = express()

app.engine('handlebars', EHbs.engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
  })

app.listen(port, () => console.log(
  `Express started in http://localhost:${port}; ` +
  `Press Ctrl+C to exit` ))