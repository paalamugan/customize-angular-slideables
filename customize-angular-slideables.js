angular.module('customize-angular-slideables', []).directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // Wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '.5s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var target, content, $jquery;
    
            if (typeof $ !== "undefined") {
                $jquery = $;
            }

            $timeout(function () {

                if ($jquery) {
                    if (!target || !target[0]) target = $jquery(attrs.slideToggle);
                } else {
                    if (!target) target = document.querySelector(attrs.slideToggle);
                }

                element.bind('click', function() {

                    if ($jquery) { //Jquery implementation

                        if (!target || !target[0]) return;

                        if (!content || !content[0]) content = target.children('.slideable_content');

                        if (!content || !content[0]) return;

                        target.toggleClass('slide-open');

                        if(target.hasClass('slide-open')) {

                            content.css('border', '1px solid rgba(0,0,0,0)');

                            var innerHeight = content.innerHeight();

                            content.css('border', 0);

                            target.css('height', innerHeight + 'px');

                        } else {
                            target.css('height', '0');
                        }

                    } else { //Plain Javascript implementation

                        if (!target) return;

                        if (!content) content = target.querySelector('.slideable_content');

                        if (!content) return;

                        target.classList.toggle('slide-open');

                        if(target.classList.contains('slide-open')) {
                            content.style.border = '1px solid rgba(0,0,0,0)';
                            var y = content.clientHeight;
                            content.style.border = 0;
                            target.style.height = y + 'px';
                        } else {
                            target.style.height = '0px';
                        }                                       
                    }

                });

            }, 0)
        }
    }
});