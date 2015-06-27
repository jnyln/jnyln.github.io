(function() {
    var CONSTANTS = {
        CURRENT_SCALE_MIN: 1,
        CURRENT_SCALE_MAX: 1.1
    };

    var secondJobs = [
        "Party Ruiner",
        "Sock Model",
        "Street Fighter",
        "Milk Connoisseur"
    ];

    $(document).ready(function() {
        $('body').addClass('loaded');

        var secondJob = secondJobs[Math.floor(Math.random() * secondJobs.length)];
        $('.second_job').text(secondJob);

        var sectionManager = new SectionManager();
        sectionManager.setSections();
        $(window).scroll(function() {
            sectionManager.setSections();
        });
        $(window).resize(function() {
            sectionManager.setSections();
        })
    });

    function SectionManager() {
        var self = this;
        this.currentSection = null;

        this.setSections = function() {
            var scrollPosition = $(window).scrollTop();
            $('section').each(function() {
                var sectionTop = $(this).offset().top;
                var sectionBottom = $(this).offset().top + $(this).height();
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    var backgroundScale = (((scrollPosition - sectionTop) / (sectionBottom - sectionTop)) * (CONSTANTS.CURRENT_SCALE_MAX - CONSTANTS.CURRENT_SCALE_MIN)) + CONSTANTS.CURRENT_SCALE_MIN;
                    $(this).find('.background').css('transform', 'translate3d(0, 0, 0) scale(' + backgroundScale + ')');
                    if (self.currentSection !== $(this).attr('id')) {
                        $('.current').removeClass('current');
                        self.currentSection = $(this).attr('id');
                        $('#'+self.currentSection).addClass('current');
                    }
                    return false;
                }
            });
        };
    }
}());