(function() {
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