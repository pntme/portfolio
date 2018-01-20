/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------
 */
(function ($) {

    "use strict";

    jQuery(document).ready(function () {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */



        jQuery(window).on("load", function () {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            $(window).scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function () {}
        };



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top button--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        $(window).on("scroll", function () {
            var top2 = $(window).scrollTop();
            if (top2 < 150) {
                $("#scroll-top-area").css('display', 'none');
            } else if (top2 >= 150) {
                $("#scroll-top-area").css('display', 'block');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");

        skillBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: ($("#portfolio").offset().top) - 60
            }, 2000);
        });
        var hireBtn = $(".hire-btn");

        hireBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: ($("#contact").offset().top) - 60
            }, 2000);
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------Typed.js----------------------------
         * -----------------------------------------------------------------
         */



        var element = $(".element");

        $(function () {
            element.typed({
                strings: ["Welcome! Welcome! Welcome"],
                typeSpeed: 100,
                loop: true,
            });
        });



        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function () {
            var animation = $(this.element).attr('data-animation');
            $(this.element).css('opacity', '1');
            $(this.element).addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });




        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();



        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
            closeOnClick: true
        });


        $("div, html").on("click", function (event) {
            if (!$(event.target).hasClass(".menu a") &&
                !$(event.target).hasClass("ul.slicknav_nav li a") &&
                !$(event.target).hasClass("slicknav_menutxt") &&
                !$(event.target).hasClass("slicknav_icon") &&
                !$(event.target).hasClass("slicknav_icon-bar") &&
                !$(event.target).hasClass("slicknav_btn")) {
                $(".menu").slicknav('close');
            }
        });

        $(window).scroll(function () {
            $('.menu').slicknav('close');
        })





        $("#download").on("click", function (event) {
            window.open(
                'pnt.pdf',
                '_blank' // <- This is what makes it open in a new window.
            );
        });


        /*
         * -----------------------------------------------------------------
         *--------------------------skills progressbar----------------------
         * -----------------------------------------------------------------
         */



        var skill = jQuery('.skills');
        var prog80 = $('.prog-80');
        var prog75 = $('.prog-75');
        var prog90 = $('.prog-90');
        var prog86 = $('.prog-86');
        var prog94 = $('.prog-94');
        var prog99 = $('.prog-99');
        var prog60 = $('.prog-60');
        var prog20 = $('.prog-20');
        skill.waypoint(function () {

            prog60.css({
                "width": "60%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '60%'
        });
        skill.waypoint(function () {

            prog80.css({
                "width": "80%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '80%'
        });
        skill.waypoint(function () {

            prog99.css({
                "width": "99%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '99%'
        });
        skill.waypoint(function () {

            prog20.css({
                "width": "20%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '20%'
        });
        skill.waypoint(function () {

            prog90.css({
                "width": "90%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '90%'
        });
        skill.waypoint(function () {

            prog90.css({
                "width": "90%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '90%'
        });
        skill.waypoint(function () {

            prog86.css({
                "width": "86%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '86%'
        });
        skill.waypoint(function () {

            prog94.css({
                "width": "94%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '94%'
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        $(window).stellar();


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function (data) {
                $('#contact .result').html(data);

                $(".contact-form-area")[0].reset();

            });

        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 2, //1 item above 1000px browser width
            itemsDesktop: [1000, 2], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

    });

})(jQuery);
/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------
 */
(function ($) {

    "use strict";

    jQuery(document).ready(function () {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */



        jQuery(window).on("load", function () {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            $(window).scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function () {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function () {
                // console.log('begin scrolling');
            },
            onComplete: function () {
                // console.log('done scrolling');

            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top button--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        $(window).on("scroll", function () {
            var top2 = $(window).scrollTop();
            if (top2 < 150) {
                $("#scroll-top-area").css('display', 'none');
            } else if (top2 >= 150) {
                $("#scroll-top-area").css('display', 'block');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");

        skillBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: ($("#portfolio").offset().top) - 60
            }, 2000);
        });
        var hireBtn = $(".hire-btn");

        hireBtn.on("click", function () {
            $('html, body').animate({
                scrollTop: ($("#contact").offset().top) - 60
            }, 2000);
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------Typed.js----------------------------
         * -----------------------------------------------------------------
         */



        var element = $(".element");

        $(function () {
            element.typed({
                strings: ["Welcome! Welcome! Welcome!"],
                typeSpeed: 100,
                loop: true,
            });
        });



        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function () {
            var animation = $(this.element).attr('data-animation');
            $(this.element).css('opacity', '1');
            $(this.element).addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });




        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();



        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------skills progressbar----------------------
         * -----------------------------------------------------------------
         */



        var skill = jQuery('.skills');
        var prog80 = $('.prog-80');
        var prog75 = $('.prog-75');
        var prog90 = $('.prog-90');
        var prog86 = $('.prog-86');
        var prog94 = $('.prog-94');
        skill.waypoint(function () {

            prog80.css({
                "width": "80%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '80%'
        });
        skill.waypoint(function () {

            prog90.css({
                "width": "90%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '90%'
        });
        skill.waypoint(function () {

            prog75.css({
                "width": "75%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '75%'
        });
        skill.waypoint(function () {

            prog86.css({
                "width": "86%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '86%'
        });
        skill.waypoint(function () {

            prog94.css({
                "width": "94%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '94%'
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        $(window).stellar();


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function (data) {
                $('#contact .result').html(data);

                $(".contact-form-area")[0].reset();

            });

        });


        $('#ContactForm').validate({ // initialize the plugin
            rules: {
                field1: {
                    required: true,
                    minlength: 4
                },
                field2: {
                    required: true,
                    email: true
                },
                field3: {
                    required: true,
                    minlength: 10
                }
            },

            messages: {
                field1: {
                    required: "Your name is required",
                    minlength: "Your name is too short"
                },
                field3: {
                    required: "Tell me your query",
                    minlength: "Tell me more"
                }


            },
            submitHandler: function (form) { // for demo
                alert('valid form submitted'); // for demo
                return false; // for demo
            }
        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 2, //1 item above 1000px browser width
            itemsDesktop: [1000, 2], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

    });

})(jQuery);