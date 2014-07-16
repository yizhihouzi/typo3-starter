$(function(){
    /**
     * RoyalSlider
     */
    if($('.royalSlider').length){
        $('.royalSliderStd').royalSlider({
            slidesSpacing: 0,
            keyboardNavEnabled: true,
            arrowsNav: false,
            loop: true,
            loopRewind: true,
            autoHeight: true,
            autoPlay: {
                enabled: true,
                pauseOnHover: true,
                delay: 8000
            },
            transitionType: 'fade'
        });
    }

    /**
     * fancybox
     */
    $('a.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        margin: 40,
        padding: 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0,0,0,.85)'
                }
            }
        }
    });


    /**
     * Responsive nav
     */

    $('#responsiveNavToggle').click(function(){
        $('#navMain ul').slideToggle();
        return false;
    })

    /**
    * Responsive handling
    */
    function responsiveHandling() {
        var browserWidth = $(window).width();

        // set a class if window width is < X
        if ((browserWidth) < 768){
           $('body').addClass("responsive");
        } else {
           $('body').removeClass("responsive");
           $('#navMain ul').slideDown();
        }
    }

    responsiveHandling();

    $(window).resize(function() {
        responsiveHandling();
    });
});