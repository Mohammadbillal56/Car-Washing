jQuery(document).ready(function($) {
    // CountUp 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })

    // Owl Carousel one
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dot:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // Owl Carousel two
    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dot:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    // Owl Carousel three
    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dot:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.ba-slider').beforeAfter();
});