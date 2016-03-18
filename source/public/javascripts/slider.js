define(function (require, define, module) {
    var Global = require('./global');

    function Slider(id, model) {
        this.id = id;
        this.init = function () {
            for (var key in model) {
                if (model.hasOwnProperty(key)) {
                    this.set(key, model[key]);
                }
            }
            this.bindApi();
        };
        this.updateSlide = function () {
            this.updateProgress();
            this.trigger('update.slide', this.get('slide'));
        };
        this.updateSubSlide = function () {
            this.updateProgress();
            this.trigger('update.subslide', this.get('subslide'));
        };
        this.updateProgress = function () {
            var scope = this,
                progress = this.get('progress');

            ++progress;

            if (progress > 100) {
                this.set('progress', 0);
                return false;
            }

            this.set('progress', ++progress);
            this.trigger('load.model', progress);

            setTimeout(function () {
                scope.updateProgress();
            }, 20)
        };
        this.bindApi = function () {
            var scope = this;

            this.on('update.model', function (model, name) {
                if (name !== 'slide' && name !== 'subslide') return false;

                if (name === 'slide') {
                    scope.updateSlide();
                } else {
                    scope.updateSubSlide();
                }
            });

            jQuery(document).on('keyup', function (e) {
                var index;

                if (e.keyCode === 37 || e.keyCode === 39) {
                    index = scope.get('slide');
                    index = e.keyCode === 39 ? ++index : --index;

                    if (index < 0 || index > scope.get('length')) return false;

                    scope.set('slide', index);
                } else if (e.keyCode === 38 || e.keyCode === 40) {
                    index = scope.get('subslide');
                    index = e.keyCode === 40 ? ++index : --index;

                    if (index < 0 || index > scope.get('sublength') - 1) return false;

                    scope.set('subslide', index);
                }
            })
        };
    }

    Slider.prototype = window.extend(Global.prototype);

    return Slider;
});