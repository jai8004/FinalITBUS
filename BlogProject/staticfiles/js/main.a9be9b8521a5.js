(function($){
    "use strict";
    jQuery(document).on('ready', function() {
        // Menu JS
        /*==============================================================*/
        $('.navbar-area .navbar-nav li a, .main-banner .ca3-scroll-down-link, .about-text .btn').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });	
        
        // Animation Text
        /*==============================================================*/
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
            var that = this;
            var delta = 200 - Math.random() * 100;
            if (this.isDeleting) { delta /= 2; }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            setTimeout(function() {
                that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
        
        // Header Sticky
        /*==============================================================*/
        $(window).on('scroll',function() {
            if ($(this).scrollTop() >70){  
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });
        
        // Counter
        /*==============================================================*/
        $(".counter").counterUp({
            delay: 20,
            time: 1500
        });
        
        // Shorting
        /*==============================================================*/
        $(function(){
            $('.shorting').mixItUp();
        });
        
        /* Services Slider
        ========================================================*/
        $(".services-slider").owlCarousel({
            nav: false,
            dots: true,
            center: false,
            touchDrag: false,
            mouseDrag: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        /* Zoom Portfolio
        ========================================================*/
        $('.zoom-portfolio').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });
        
        /* Testimonial Slider
        ========================================================*/
        $(".testimonial-slider").owlCarousel({
            nav: false,
            dots: true,
            center: false,
            touchDrag: false,
            mouseDrag: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                1200:{
                    items:2,
                }
            }
        });
        
        /* Ripple Effect
        ========================================================*/
        $('.ripple-effect, .ripple-playing').ripples({
            resolution: 512,
            dropRadius: 25,
            perturbance: 0.04,
        });
        
        /* Blog Slider
        ========================================================*/
        $(".blog-slider").owlCarousel({
            nav: false,
            dots: true,
            center: false,
            touchDrag: false,
            mouseDrag: true,
            autoplay: true,
            smartSpeed: 750,
			margin:0,
            autoplayHoverPause: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        /* Practicle JS
        ========================================================*/
        if(document.getElementById("particles-js")) particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area":1000
                    }
                },
                "color": {
                    "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                },

                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    });
    /* Go To Top
    ========================================================*/
    $(function(){
        //Scroll event
        $(window).on('scroll',function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 200) $('.go-top').fadeIn('slow');
            if (scrolled < 200) $('.go-top').fadeOut('slow');
        });  
        //Click event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });
    
    /* Preloader
    ========================================================*/
    jQuery(window).on('load', function() {
        $('.preloader-area').fadeOut();
    });
}(jQuery));
