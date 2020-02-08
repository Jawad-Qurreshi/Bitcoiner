/**
  * responsiveMenu
  * accordionToggle
  * ajaxSubscribe.eventLoad
  * ajaxContactForm
  * swClick
  * detectViewport
  * googleMap
  * goTop
  * topSearch
  * counterAbout
  * testimonialSlider
  * testimonialSlider_1
  * videoPopup
  * resultCurrency
  * retinaLogos
  * removePreloader
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $('#mainnav').find('li:has(ul)').children('ul').show();
                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function() {
        var nav = $('.header.bg-color');
            $(window).on('load', function(){
            var header = $('.header.bg-color');           
            var offsetTop = $('.header.bg-color').offset().top;
            var headerHeight = $('.header.bg-color').height();
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('.header.bg-color').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('.header.bg-color').removeClass('fixed-header');
                        buffer.hide();
                    }
                })
           
            }); // headerFixed style1
    };

    var accordionToggle = function() {
        var speed = {duration: 400};
        $('.toggle-content').hide();
        $('.accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.accordion').find('.toggle-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(speed);
            $(".toggle-content").not($(this).next()).slideUp(speed);
            if ($(this).is('.active')) {
                $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                $(this).toggleClass('active');
            };
        });
    }; // Accordion Toggle

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };  

    var ajaxSubscribe = {
        obj: {
            subscribeEmail    : $('#subscribe-email'),
            subscribeButton   : $('#subscribe-button'),
            subscribeMsg      : $('#subscribe-msg'),
            subscribeContent  : $("#subscribe-content"),
            dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
            success_message   : '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message   : '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError       : '<div class="notification_error">{msg}</div>',
            noticeInfo        : '<div class="notification_error">{msg}</div>',
            basicAction       : 'mail/subscribe.php',
            mailChimpAction   : 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function() {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function() {
                if ( window.ajaxCalling ) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if ( isMailchimp ) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                   subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if ( responseData.status ) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var counterAbout = function() {      
        if ( $().countTo ) {
            $('.wrap-counter').on('on-appear', function() {
                $(this).find('.numb-count').each(function() {
                    var to = parseInt( $(this).data('to'), 10 ),
                        speed = parseInt( $(this).data('speed'), 10 );
                        
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                });
            }); // wrap counter
        };
    }; // Counter About

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            });
        });
    };  

    var googleMap = function() {            
        if ( $().gmap3 ) {  
            $(".map").gmap3({
                map:{
                    options:{
                        zoom: 15,
                        mapTypeId: 'Consulin_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['Consulin_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  $('.flat-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.flat-maps').data('image')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "Consulin_style",
                    options:{
                        name: "Consulin Map"
                    },
                    styles:[
                            {
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#444444"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#f2f2f2"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.business",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "saturation": -100
                                    },
                                    {
                                        "lightness": 45
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#b4d4e1"
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            }
                        ]
                },  
            });
        }
        $('.map').css( 'height', $('.flat-maps').data('height') );
    };

    var goTop = function() {
        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    }; 
    
    var topSearch = function () {
        $('.show-search i').on('click', function (event) {
            event.stopPropagation();
            $(this).parent('.show-search').next('.top-search').addClass('show');
        });  
        $('body').on('click', function(){
            $('.top-search').removeClass('show');
        });
        $('#searchform-all').on('click', function(event){
            event.stopPropagation();
        });
    };

    var swClick = function () {
        function activeLayout () {
             
            $(".switcher-container" ).on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');  
                $('body').css({'background': '#f6f6f6' });                
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "display": "block",  "z-index": "10"});
            }).on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "display": "none", "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({'background': '#fff' });
                return false;
            })       
        }        

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }

    var testimonialSlider = function() {
        $('#testimonial-slider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false,
        });
    };

    var testimonialSlider_1 = function() {
        $('#testimonial-slider-1').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: true,
        });
    };

    var videoPopup =  function() {
        $(".fancybox").on("click", function(){
            $.fancybox({
              href: this.href,
              type: $(this).data("type")
            }); // fancybox
            return false   
        }); // on
    }; // Video Popup

    var resultCurrency = function() {
        $('.form-convert').each(function(){
            $('.btn-submit').on('click', function(){
                var y = document.getElementById("currency_price").value;
                result_currency.innerHTML = number_currency.value * y;
            });
        });
    };

    var flatEqualHeight = function() {
        $(window).on("load resize", function(){
            setTimeout(function(){
                 if ( $().imagesLoaded ) {
                    $(document).imagesLoaded(function(){
                        if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                            $('.equal').equalize({equalize: 'outerHeight', reset: true});
                            return false;
                        } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                            $('.equal').equalize({equalize: 'outerHeight', reset: true});
                            return false;
                        } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                            $('.equal').equalize({equalize: 'outerHeight', reset: true});
                            return false;
                        } else {
                            $('.equal').equalize({equalize: 'outerHeight', reset: true});
                        }
                    });
                }
            },500);
        });
    };

    var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;
        if(retina) {
            $('.logo').find('img').attr({src:'./images/logo@2x.png',width:'131',height:'21'}); 
        }

        if(retina) {
            $('#logo-ft').find('img').attr({src:'./images/logo-ft@2x.png',width:'133',height:'21'}); 
        }
    }; 

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(300).fadeOut('slow',function(){
            $(this).remove();
            }); 
      });
    };

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {          
            
            headerFixed();
        }
        responsiveMenu();
        accordionToggle();
        ajaxSubscribe.eventLoad();
        ajaxContactForm();
        swClick();
        detectViewport();
        googleMap();       
        goTop();
        topSearch();
        counterAbout();
        testimonialSlider();
        testimonialSlider_1();
        videoPopup();
        resultCurrency();
        flatEqualHeight();
        retinaLogos();
        removePreloader();
   	});

})(jQuery);