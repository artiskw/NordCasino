jQuery(function ($) {
    jQuery(document).ready(function () {


        // Mobile menu
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $(".menu-breakpoint-menu-container ").toggleClass("is-active");
        });

        

        // Slider
        $(".slider-container").slick({  //banner_slider, šajā class ir iekšā class="slider-objects"
            infinite: true,
            dots: true,
            appendDots: $(".slider-dots"),
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        });

          // Star rating
            // Gets the span width of the filled-ratings span
            // this will be the same for each rating
            var star_rating_width = $('.fill-ratings span').width();
            // Sets the container of the ratings to span width
            // thus the percentages in mobile will never be wrong
            $('.star-ratings').width(star_rating_width);
    });
})





