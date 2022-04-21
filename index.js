const express = require('express')
const EHbs = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

app.engine('handlebars', EHbs.engine({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if(!this._section) this._section = {}
      this._section[name] = options.fn(this)
      return null
    },
  },
}))
app.set('view engine', 'handlebars')

/* eslint-disable no-undef */
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
/* eslint-enable no-undef */

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/headers', (req, res) => {
  res.type('text/plain')
  const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`)
  res.send(headers.join('\n'))
})
app.get('/greet', handlers.greeting)
app.get('/jq', handlers.jq)
app.get('/tasty', handlers.tasty)
// Пользовательская страница 404
app.use(handlers.notFound)
// Пользовательская страница 500
app.use(handlers.serverError)

if(require.main === module) {
  app.listen(port, () => {
  console.log( `Express запущен на http://localhost:${port}` +
    '; нажмите Ctrl+C для завершения.' )
  })
} else {
  module.exports = app
}
