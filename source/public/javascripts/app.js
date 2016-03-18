define(function (require, define, module) {
    var Slider = require('../slider');

    var loader = jQuery('#loader'),
        slide = jQuery('#slider .slide'),
        subSlide = '.subslider .content',
        slider;

    slider = new Slider('slider', {
        'slide': 0,
        'subslide': 0,
        'sublength': slide.filter('.active').find(subSlide).length,
        'length': 4,
        'progress': 0
    });

    slider.on('update.slide', function (index) {
        slide.removeClass('active').eq(index).addClass('active');
        loader.addClass('active');

        setTimeout(function () {
            slider.set('progress', 100);
            loader.removeClass('active');
        }, 1000);

        slider.set('subslide', 0);
        slider.set('sublength', slide.filter('.active').find(subSlide).length);
    });

    slider.on('update.subslide', function (index) {
        slide.filter('.active').find(subSlide).removeClass('active').eq(index).addClass('active');
        loader.addClass('active');

        setTimeout(function () {
            slider.set('progress', 100);
            loader.removeClass('active');
        }, 1000)
    });

    slider.on('load.model', function (progress) {
        loader.html(progress);
    });

    return {
        init: function () {
            slider.init();
            slide.removeClass('active').eq(slider.get('slide')).addClass('active');
        }
    }
});