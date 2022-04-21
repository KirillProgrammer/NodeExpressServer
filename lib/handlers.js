const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() })

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

// Express распознает обработчик ошибок по его четырем аргументам,
// поэтому нам нужно отключить правило no-unused-vars в ESLint.
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */
