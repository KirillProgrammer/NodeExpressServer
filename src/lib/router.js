/* eslint-disable no-fallthrough */

exports.AppRoter = class AppRoter {
	constructor(app) {
		this.app = app
	}
	bindRoute(method, path, handler) {
		switch (method) {
			case 'get': this.app.get(path, handler)
			case 'post': this.app.post(path, handler)
			case 'put': this.app.put(path, handler)
			case 'delete': this.app.delete(path, handler)
		}
	}
	
	bindError(handler) {
		this.app.use(handler)
	}
}
