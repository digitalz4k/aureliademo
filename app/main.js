import 'foundation-sites';

export function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a=> a.setRoot("layout"))
        .then(a=> {
            $(document).foundation();
    });
};
