export class Layout {

    configureRouter(config, router){
        config.title = 'Aurelia Demo';
        config.map([
            { route: ['', 'hello'], moduleId: './components/hello/hello',
                name: 'Hello', title: 'Hello', nav: true },

            { route: 'options', moduleId: './components/options/options',
                title: 'options', nav: true },

            { route: 'events', moduleId: './components/events/events',
                title: 'Events', nav: true },

            { route: 'dashboard', moduleId: './components/admin/dashboard',
                title: 'Dashboard', nav: true }
        ]);

        this.router = router;
    }
}
