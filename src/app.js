const express = require('express')
const router = require('./lib/router')
const EHbs = require('express-handlebars')
const bodyParser = require('body-parser')

exports.App = class App {
	constructor() {
		this.app = express()
		this.router = new router.AppRoter(this.app)
		this.app.engine('handlebars', EHbs.engine({
			defaultLayout: 'main',
			helpers: {
				section: function(name, options) {
					if(!this._section) this._section = {}
					this._section[name] = options.fn(this)
					return null
				},
			},
		}))
		this.app.set('view engine', 'handlebars')
		// this.app.use(bodyParser.urlencoded({ extended: true })) для обычной отправки форм
		this.app.use(bodyParser.json()) // для отправки форм в json
		/* eslint-disable no-undef */
		this.app.use(express.static(__dirname + '/public'))
		this.port = process.env.PORT || 3000
	}
	bindRoutes(arrRoutes) {
		/*
		[
			{ method: string , path: string, handler: function }
		]
		*/ 
		arrRoutes.forEach(route => {
			const { method, path, handler } = route
			this.router.bindRoute(method, path, handler)
		})
	}
	bindErrors(errorsHandlers) {
		errorsHandlers.forEach(handler => this.router.bindError(handler))
	}
	listen(func) {
		this.app.listen(this.port, func)
	}
}