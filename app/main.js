import 'foundation-sites';

export function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a=> a.setRoot("app"))
        .then(a=> {
            $(document).foundation();
    });
};
