class Router {
    constructor() {
        window.addEventListener('hashchange', (event) => {
            this.navigate(event);
        })
        this._routes = new Map();
    }

    register() {
        
    }
    navigate(event) {
        console.log(location.hash);
        console.log('event---', event);
    }
}

export default new Router();
