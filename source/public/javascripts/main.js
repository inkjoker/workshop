requirejs(['config', 'utilities', 'app'], function(config, utilities, app) {
    jQuery(document).ready(function() {
        app.init();
    });
});