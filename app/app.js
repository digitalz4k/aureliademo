export class App {

    configureRouter(config, router){
        config.title = 'Aurelia Demo';
        config.options.pushState = true;
        config.options.hashChange = false;
        config.map([
            { route: ['', 'hello'], moduleId: './components/hello/hello',
                name: 'Hello', title: 'Hello', nav: true },

            { route: 'options', moduleId: './components/options/options',
                title: 'Options', nav: true },

            { route: 'events', moduleId: './components/events/events',
                title: 'Events', nav: true },

            { route: 'dashboard', moduleId: './components/admin/dashboard',
                title: 'Dashboard', nav: true }
        ]);

        this.router = router;
    }
}
