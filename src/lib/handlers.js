const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about',
                { fortune: fortune.getFortune() })

exports.greeting = (req, res) => {
  res.render('greeting', {
    message: 'Приветствую, уважаемый программист!',
    userid: req.cookies.userid,
    username: req.session.username
  })
}
exports.jq = (req, res) => res.render('jq-test')
exports.tasty = (req, res) => res.render('tasty')
exports.notFound = (req, res) => res.render('404')

exports.newsletterSignup = (req, res) => {
  res.render('newsletter-signup', { csrf: "Здесь находится токен CSRF" })
}

exports.newsletterSignupProcess = (req, res) => {
  console.log('Форма (из строки запроса): ' + req.query.form)
  console.log('Токен CSRF (из скрытого поля формы): ' + req.body._csrf)
  console.log('Имя (из видимого поля формы): ' + req.body.name)
  console.log('E-mail (из видимого поля формы): ' + req.body.email)
  res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => {
  res.render('newsletter-signup-thank-you')
}

exports.newsletter = (req, res) => {
  // Мы изучим CSRF позже... сейчас мы лишь
  // вводим фиктивное значение.
  res.render('newsletter', { csrf: 'Здесь находится токен CSRF' })
}
exports.api = {
  newsletterSignup: (req, res) => {
    console.log('Токен CSRF (из скрытого поля формы): ' + req.body._csrf)
    console.log('Имя (из видимого поля формы): ' + req.body.name)
    console.log('Email (из видимого поля формы): ' + req.body.email)
    res.send({ result: 'success' })
  },
}

exports.notFound = (req, res) => res.render('404')
// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500')
