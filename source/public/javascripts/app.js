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

    _.extend(slider, {
        updateState: function(slider, index, loader) {
            var scope = this;

            slider.removeClass('active').eq(index).addClass('active');
            loader.addClass('active');

            setTimeout(function () {
                scope.set('progress', 100);
                loader.removeClass('active');
            }, 500);
        }
    });

    slider.on('update.slide', function (index) {
        this.updateState(slide, index, loader);

        this.set('subslide', 0);
        this.set('sublength', slide.filter('.active').find(subSlide).length);
    });

    slider.on('update.subslide', function (index) {
        this.updateState(slide.filter('.active').find(subSlide), index, loader);
    });

    slider.on('load.model', function (progress) {
        loader.html(progress);
    });

    return {
        init: function () {
            slider.init();
            slide.removeClass('active').eq(slider.get('slide')).addClass('active');

            jQuery('.list').on('click', function() {
                jQuery(this).toggleClass('active');
            });
        }
    }
});