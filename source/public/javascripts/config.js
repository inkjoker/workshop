requirejs.config({
    baseUrl: 'javascripts/vendor',

    paths: {
        jquery: 'jquery/dist/jquery.min',
        ko: 'knockout/dist/knockout.debug',
        underscore: 'underscore/underscore-min'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});