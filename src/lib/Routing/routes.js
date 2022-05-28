const handlers = require('../handlers')

exports.routes = [
	{ method: 'get', path: '/', handler: handlers.home },
	{ method: 'get', path: '/about', handler: handlers.about },
	{ method: 'get', path: '/greet', handler: handlers.greeting },
	{ method: 'get', path: '/jq', handler: handlers.jq },
	{ method: 'get', path: '/greet', handler: handlers.greeting },
	{ method: 'get', path: '/newsletter-signup', handler: handlers.newsletterSignup },
	{ method: 'post', path: '/newsletter-signup/process', handler: handlers.newsletterSignupProcess },
	{ method: 'get', path: '/newsletter-signup/thank-you', handler: handlers.newsletterSignupThankYou },
	{ method: 'get', path: '/newsletter-signup-json', handler: handlers.newsletter },
	{ method: 'post', path: '/api/newsletter-signup', handler: handlers.api.newsletterSignup },
]
exports.errors = [
	handlers.notFound,
	handlers.serverError
]