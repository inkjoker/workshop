define(function(require, define, module) {
    window.jQuery = require('jquery');
    window._ = require('underscore');
    window.ko = require('ko');

    window.extend = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F
    }
});