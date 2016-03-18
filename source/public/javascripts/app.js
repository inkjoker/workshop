define(function(require, define, module) {
    var Slider = require('../slider');

    var slider = new Slider('slider', {
        'slide': 0,
        'length': 4,
        'progress': 0
    });

   return {
       init: function() {
           slider.init();

           slider.on('update.slide', function(index) {
               jQuery('#slider .slide').removeClass('active').eq(index).addClass('active');
               jQuery('#loader').addClass('active');
               setTimeout(function() {
                   slider.set('progress', 100);
                   jQuery('#loader').removeClass('active');
               }, 1000)
           });

           slider.on('load.model', function(progress) {
               jQuery('#loader').html(progress);
           });
       }
   }
});