const App = require('./app')
const routes = require('./lib/Routing/routes')


function bootstrap() {
	const app = new App.App()
	app.bindRoutes(routes.routes)
	app.bindErrors(routes.errors)
	
	app.listen(() => {
		console.log(`listening on http://localhost:${app.port}`)
	})

}

bootstrap()