(function($) {
    "use strict";
    let areaBtnNext = HTMEGAF.buttion_area_text_next;
    let areaBtnPrev = HTMEGAF.buttion_area_text_prev;
    var WidgetTestimonialCarouselHandler = function($scope, $) {
        var carousel_elem = $scope.find('.htmega-testimonial-activation').eq(0);
        if (carousel_elem.length > 0) {
            carousel_elem[0].style.display = 'block'
        }
        if (carousel_elem.length > 0) {
            var settings = carousel_elem.data('settings');
            var arrows = settings.arrows;
            var arrow_prev_txt = settings.arrow_prev_txt;
            var arrow_next_txt = settings.arrow_next_txt;
            var testimonial_style_ck = parseInt(settings.testimonial_style_ck) || 1;
            var dots = settings.dots;
            var autoplay = settings.autoplay;
            var autoplay_speed = parseInt(settings.autoplay_speed) || 3000;
            var animation_speed = parseInt(settings.animation_speed) || 300;
            var pause_on_hover = settings.pause_on_hover;
            var center_mode = settings.center_mode;
            var center_padding = parseInt(settings.center_padding) || 0;
            var center_padding = center_padding.toString();
            var display_columns = parseInt(settings.display_columns) || 1;
            var scroll_columns = parseInt(settings.scroll_columns) || 1;
            var tablet_width = parseInt(settings.tablet_width) || 800;
            var tablet_display_columns = parseInt(settings.tablet_display_columns) || 1;
            var tablet_scroll_columns = parseInt(settings.tablet_scroll_columns) || 1;
            var mobile_width = parseInt(settings.mobile_width) || 480;
            var mobile_display_columns = parseInt(settings.mobile_display_columns) || 1;
            var mobile_scroll_columns = parseInt(settings.mobile_scroll_columns) || 1;
            if (testimonial_style_ck == 5 || testimonial_style_ck == 11) {
                var carousel_elem_for = $scope.find('.htmega-testimonial-activation .htmega-testimonial-for').eq(0);
                if (carousel_elem_for.length > 0) {
                    carousel_elem_for[0].style.display = 'block'
                }
                var carousel_elem_nav = $scope.find('.htmega-testimonial-activation .htmega-testimonal-nav').eq(0);
                if (carousel_elem_nav.length > 0) {
                    carousel_elem_nav[0].style.display = 'block'
                }
                carousel_elem_for.not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: scroll_columns,
                    arrows: arrows,
                    prevArrow: '<button aria-label="' + areaBtnPrev + '" type="button" class="slick-prev">' + arrow_prev_txt + '</button>',
                    nextArrow: '<button aria-label="' + areaBtnNext + '" type="button" class="slick-next">' + arrow_next_txt + '</button>',
                    dots: dots,
                    fade: !0,
                    asNavFor: '.htmega-testimonal-nav'
                });
                carousel_elem_nav.not('.slick-initialized').slick({
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    asNavFor: '.htmega-testimonial-for',
                    dots: !1,
                    arrows: !1,
                    centerMode: center_mode,
                    focusOnSelect: !0,
                    centerPadding: center_padding + 'px',
                })
            } else {
                carousel_elem.not('.slick-initialized').slick({
                    arrows: arrows,
                    prevArrow: '<button aria-label="' + areaBtnPrev + '" type="button" class="slick-prev">' + arrow_prev_txt + '</button>',
                    nextArrow: '<button aria-label="' + areaBtnNext + '" type="button" class="slick-next">' + arrow_next_txt + '</button>',
                    dots: dots,
                    infinite: !0,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: !1,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode: center_mode,
                    centerPadding: center_padding + 'px',
                    responsive: [{
                        breakpoint: tablet_width,
                        settings: {
                            slidesToShow: tablet_display_columns,
                            slidesToScroll: tablet_scroll_columns
                        }
                    }, {
                        breakpoint: mobile_width,
                        settings: {
                            slidesToShow: mobile_display_columns,
                            slidesToScroll: mobile_scroll_columns
                        }
                    }]
                })
            }
        }
    }
    var WidgetHtmegaCarouselHandler = function($scope, $) {
        var carousel_elem = $scope.find('.htmega-carousel-activation').eq(0);
        if (carousel_elem.length > 0 && carousel_elem[0]) {
            carousel_elem[0].style.display = 'block'
        }
        if (carousel_elem.length > 0) {
            var settings = carousel_elem.data('settings');
            var sectionid = settings.sectionid;
            var arrows = settings.arrows;
            var arrow_prev_txt = settings.arrow_prev_txt;
            var arrow_next_txt = settings.arrow_next_txt;
            var dots = settings.dots;
            var autoplay = settings.autoplay;
            var autoplay_speed = parseInt(settings.autoplay_speed) || 3000;
            var animation_speed = parseInt(settings.animation_speed) || 300;
            var pause_on_hover = settings.pause_on_hover;
            var center_mode = settings.center_mode;
            var verticalMode = (settings.vertical_mode) ? settings.vertical_mode : !1;
            var slloop = settings.slloop;
            var center_padding = settings.center_padding ? parseInt(settings.center_padding) : 0;
            var variable_width = settings.variable_width ? !0 : !1;
            var display_columns = parseInt(settings.display_columns) || 1;
            var scroll_columns = parseInt(settings.scroll_columns) || 1;
            var tablet_width = parseInt(settings.tablet_width) || 800;
            var tablet_display_columns = parseInt(settings.tablet_display_columns) || 1;
            var tablet_scroll_columns = parseInt(settings.tablet_scroll_columns) || 1;
            var mobile_width = parseInt(settings.mobile_width) || 480;
            var mobile_display_columns = parseInt(settings.mobile_display_columns) || 1;
            var mobile_scroll_columns = parseInt(settings.mobile_scroll_columns) || 1;
            var carousel_style_ck = parseInt(settings.carousel_style_ck) || 1;
            if (carousel_style_ck == 4) {
                carousel_elem.not('.slick-initialized').slick({
                    arrows: arrows,
                    prevArrow: '<button class="htmega-carosul-prev">' + arrow_prev_txt + '</button>',
                    nextArrow: '<button class="htmega-carosul-next">' + arrow_next_txt + '</button>',
                    dots: dots,
                    customPaging: function(slick, index) {
                        var data_title = slick.$slides.eq(index).find('.htmega-data-title').data('title');
                        var data_thumbnail = slick.$slides.eq(index).find('.htmega-data-title').data('thumbnail');
                        if (data_thumbnail) {
                            return '<img src="' + data_thumbnail + '" alt="' + data_title + '">'
                        } else {
                            return '<h6>' + data_title + '</h6>'
                        }
                    },
                    infinite: !0,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: !1,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode: center_mode,
                    centerPadding: center_padding + 'px',
                    vertical: verticalMode,
                    rtl: elementorFrontendConfig.is_rtl,
                    responsive: [{
                        breakpoint: tablet_width,
                        settings: {
                            slidesToShow: tablet_display_columns,
                            slidesToScroll: tablet_scroll_columns
                        }
                    }, {
                        breakpoint: mobile_width,
                        settings: {
                            slidesToShow: mobile_display_columns,
                            slidesToScroll: mobile_scroll_columns
                        }
                    }]
                })
            } else {
                carousel_elem.not('.slick-initialized').slick({
                    arrows: arrows,
                    prevArrow: '<button aria-label="' + areaBtnPrev + '" class="htmega-carosul-prev">' + arrow_prev_txt + '</button>',
                    nextArrow: '<button aria-label="' + areaBtnNext + '" class="htmega-carosul-next">' + arrow_next_txt + '</button>',
                    dots: dots,
                    infinite: !0,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    infinite: slloop,
                    fade: !1,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode: center_mode,
                    centerPadding: center_padding + 'px',
                    variableWidth: variable_width,
                    vertical: verticalMode,
                    rtl: elementorFrontendConfig.is_rtl,
                    responsive: [{
                        breakpoint: tablet_width,
                        settings: {
                            slidesToShow: tablet_display_columns,
                            slidesToScroll: tablet_scroll_columns
                        }
                    }, {
                        breakpoint: mobile_width,
                        settings: {
                            slidesToShow: mobile_display_columns,
                            slidesToScroll: mobile_scroll_columns
                        }
                    }]
                })
            }
            if (settings.equal_height_column && settings.sectionid && settings.equal_height_column_class) {
                var maxHeight = -1;
                $('.' + settings.sectionid + ' ' + settings.equal_height_column_class).each(function() {
                    if ($('.' + settings.sectionid + ' ' + settings.equal_height_column_class).outerHeight() > maxHeight) {
                        maxHeight = $('.' + settings.sectionid + ' ' + settings.equal_height_column_class).outerHeight()
                    }
                });
                $('.' + settings.sectionid + ' ' + settings.equal_height_column_class).each(function() {
                    if ($(this).outerHeight() < maxHeight) {
                        $(this).css('height', maxHeight + 'px')
                    }
                })
            }
        }
    }
    var WidgetHtmegaThumbnailsgalleryHandler = function($scope, $) {
        var thumbnailscarousel_elem_for = $scope.find('.htmega-thumbgallery-for').eq(0);
        var thumbnailscarousel_elem_nav = $scope.find('.htmega-thumbgallery-nav').eq(0);
        thumbnailscarousel_elem_for[0].style.display = 'block';
        thumbnailscarousel_elem_nav[0].style.display = 'block';
        if (thumbnailscarousel_elem_for.length > 0) {
            var settings = thumbnailscarousel_elem_for.data('settings');
            var arrows = settings.arrows;
            var arrow_prev_txt = settings.arrow_prev_txt;
            var arrow_next_txt = settings.arrow_next_txt;
            var dots = settings.dots;
            var autoplay = settings.autoplay;
            var autoplay_speed = parseInt(settings.autoplay_speed) || 3000;
            var animation_speed = parseInt(settings.animation_speed) || 300;
            var pause_on_hover = settings.pause_on_hover;
            var center_mode = settings.center_mode;
            var center_padding = parseInt(settings.center_padding) || 0;
            var center_padding = center_padding.toString();
            var display_columns = parseInt(settings.display_columns) || 1;
            var scroll_columns = parseInt(settings.scroll_columns) || 1;
            var tablet_width = parseInt(settings.tablet_width) || 800;
            var tablet_display_columns = parseInt(settings.tablet_display_columns) || 1;
            var tablet_scroll_columns = parseInt(settings.tablet_scroll_columns) || 1;
            var mobile_width = parseInt(settings.mobile_width) || 480;
            var mobile_display_columns = parseInt(settings.mobile_display_columns) || 1;
            var mobile_scroll_columns = parseInt(settings.mobile_scroll_columns) || 1;
            var navsettings = thumbnailscarousel_elem_nav.data('navsettings');
            var navarrows = navsettings.navarrows;
            var navarrow_prev_txt = navsettings.navarrow_prev_txt;
            var navarrow_next_txt = navsettings.navarrow_next_txt;
            var navdots = navsettings.navdots;
            var navvertical = navsettings.navvertical;
            var navautoplay = navsettings.navautoplay;
            var navautoplay_speed = parseInt(navsettings.navautoplay_speed) || 3000;
            var navanimation_speed = parseInt(navsettings.navanimation_speed) || 300;
            var navpause_on_hover = navsettings.navpause_on_hover;
            var navcenter_mode = navsettings.navcenter_mode;
            var navcenter_padding = parseInt(navsettings.navcenter_padding) || 0;
            var navcenter_padding = navcenter_padding.toString();
            var navdisplay_columns = parseInt(navsettings.navdisplay_columns) || 1;
            var navscroll_columns = parseInt(navsettings.navscroll_columns) || 1;
            var navtablet_width = parseInt(navsettings.navtablet_width) || 800;
            var navtablet_display_columns = parseInt(navsettings.navtablet_display_columns) || 1;
            var navtablet_scroll_columns = parseInt(navsettings.navtablet_scroll_columns) || 1;
            var navmobile_width = parseInt(navsettings.navmobile_width) || 480;
            var navmobile_display_columns = parseInt(navsettings.navmobile_display_columns) || 1;
            var navmobile_scroll_columns = parseInt(navsettings.navmobile_scroll_columns) || 1;
            thumbnailscarousel_elem_for.not('.slick-initialized').slick({
                arrows: arrows,
                prevArrow: '<button aria-label="' + areaBtnPrev + '" class="htmega-carosul-prev">' + arrow_prev_txt + '</button>',
                nextArrow: '<button aria-label="' + areaBtnNext + '" class="htmega-carosul-next">' + arrow_next_txt + '</button>',
                asNavFor: thumbnailscarousel_elem_nav,
                dots: dots,
                infinite: !0,
                autoplay: autoplay,
                autoplaySpeed: autoplay_speed,
                speed: animation_speed,
                fade: !1,
                pauseOnHover: pause_on_hover,
                slidesToShow: display_columns,
                slidesToScroll: scroll_columns,
                centerMode: center_mode,
                centerPadding: center_padding + 'px',
                rtl: elementorFrontendConfig.is_rtl,
                responsive: [{
                    breakpoint: tablet_width,
                    settings: {
                        slidesToShow: tablet_display_columns,
                        slidesToScroll: tablet_scroll_columns
                    }
                }, {
                    breakpoint: mobile_width,
                    settings: {
                        slidesToShow: mobile_display_columns,
                        slidesToScroll: mobile_scroll_columns
                    }
                }]
            });
            thumbnailscarousel_elem_nav.not('.slick-initialized').slick({
                slidesToShow: navdisplay_columns,
                slidesToScroll: navscroll_columns,
                asNavFor: thumbnailscarousel_elem_for,
                dots: navdots,
                autoplay: navautoplay,
                autoplaySpeed: navautoplay_speed,
                centerMode: navcenter_mode,
                centerPadding: navcenter_padding + 'px',
                rtl: elementorFrontendConfig.is_rtl,
                responsive: [{
                    breakpoint: navtablet_width,
                    settings: {
                        slidesToShow: navtablet_display_columns,
                        slidesToScroll: navtablet_scroll_columns
                    }
                }, {
                    breakpoint: navmobile_width,
                    settings: {
                        slidesToShow: navmobile_display_columns,
                        slidesToScroll: navmobile_scroll_columns
                    }
                }],
                infinite: !0,
                focusOnSelect: !0,
                vertical: navvertical,
                arrows: navarrows,
                prevArrow: '<button aria-label="' + areaBtnPrev + '" class="htmega-carosul-prev">' + navarrow_prev_txt + '</button>',
                nextArrow: '<button aria-label="' + areaBtnNext + '" class="htmega-carosul-next">' + navarrow_next_txt + '</button>',
                draggable: !0,
                verticalSwiping: !0,
            })
        }
    }
    var WidgetGoogleMapHandler = function($scope, $) {
        var googlemap_elem = $scope.find('.htmega-google-map').eq(0);
        if (googlemap_elem.length > 0) {
            var mapsettings = googlemap_elem.data('mapmarkers');
            var mapsoptions = googlemap_elem.data('mapoptions');
            var mapstyles = googlemap_elem.data('mapstyle');
            if (mapsettings && Array.isArray(mapsettings)) {
                mapsettings = mapsettings.map(function(marker) {
                    marker.baloon_text = DOMPurify.sanitize(marker.baloon_text);
                    return marker
                })
            }
            var myMarkers = {
                "markers": mapsettings,
            };
            googlemap_elem.mapmarker({
                zoom: mapsoptions.zoom,
                center: mapsoptions.center,
                styles: mapstyles,
                markers: myMarkers,
            })
        }
    }
    var WidgetAccordionsMapHandler = function($scope, $) {
        var accordion_elem = $scope.find('#accordion-4').eq(0);
        var accordiontwo_elem = $scope.find('#va-accordion').eq(0);
        if (accordion_elem.length > 0) {
            $('#accordion-4 > li').hover(function() {
                var $this = $(this);
                $this.stop().animate({
                    'width': '430px'
                }, 500);
                $('.heading', $this).stop(!0, !0).fadeOut();
                $('.bgDescription', $this).stop(!0, !0).slideDown(500);
                $('.description', $this).stop(!0, !0).fadeIn()
            }, function() {
                var $this = $(this);
                $this.stop().animate({
                    'width': '130px'
                }, 1000);
                $('.heading', $this).stop(!0, !0).fadeIn();
                $('.description', $this).stop(!0, !0).fadeOut(500);
                $('.bgDescription', $this).stop(!0, !0).slideUp(700)
            })
        }
        if (accordiontwo_elem.length > 0) {
            var accordionsettings = accordiontwo_elem.data('accordionoptions');
            accordiontwo_elem.vaccordion({
                accordionH: accordionsettings.accordionheight,
                expandedHeight: accordionsettings.expandedheight,
                visibleSlices: accordionsettings.visibleitem,
                animSpeed: 500,
                animEasing: 'easeInOutBack',
                animOpacity: 1,
            })
        }
    }
    var WidgetPieChartMapHandler = function($scope, $) {
        var piechart_elem = $scope.find('.radial-progress').eq(0);
        if (piechart_elem.length > 0) {
            $('.radial-progress').waypoint(function() {
                $('.radial-progress').easyPieChart({
                    lineWidth: 10,
                    trackColor: !1,
                    scaleLength: 0,
                    rotate: 0,
                    barColor: '#1cb9da',
                    trackColor: '#dcd9d9',
                    lineCap: 'rott',
                    size: 130
                })
            }, {
                triggerOnce: !0,
                offset: 'bottom-in-view'
            })
        }
    }

    function countDownFlip($this, $time, $countdownoptions) {
        var labels = ['Days', 'Hours', 'Mins', 'Secs'],
            template = function(label, curr, next) {
                if (($countdownoptions.htmegaday == 'yes') && (label.toLowerCase() == 'days')) {
                    return (`<div class="htmega-time htmega-days">
                            <div class="htmega-time-inner">
                                <span class="ht-count htmega-curr htmega-top">${curr}</span>
                                <span class="ht-count htmega-next htmega-top">${next}</span>
                                <span class="ht-count htmega-next htmega-bottom">${next}</span>
                                <span class="ht-count htmega-curr htmega-bottom">${curr}</span>
                            </div>
                            <span class="htmega-label">${($countdownoptions['lavelhide'] == 'yes') ? '' : $('<p>').text($countdownoptions['htmegadaytxt']).html()}</span>
                        </div>`)
                } else if (($countdownoptions.htmegahours == 'yes') && (label.toLowerCase() == 'hours')) {
                    return (`<div class="htmega-time htmega-hours">
                            <div class="htmega-time-inner">
                                <span class="ht-count htmega-curr htmega-top">${curr}</span>
                                <span class="ht-count htmega-next htmega-top">${next}</span>
                                <span class="ht-count htmega-next htmega-bottom">${next}</span>
                                <span class="ht-count htmega-curr htmega-bottom">${curr}</span>
                            </div>
                            <span class="htmega-label">${($countdownoptions['lavelhide'] == 'yes') ? '' : $('<p>').text($countdownoptions['htmegahourtxt']).html()}</span>
                        </div>`)
                } else if (($countdownoptions.htmegaminiute == 'yes') && (label.toLowerCase() == 'mins')) {
                    return (`<div class="htmega-time htmega-mins">
                            <div class="htmega-time-inner">
                                <span class="ht-count htmega-curr htmega-top">${curr}</span>
                                <span class="ht-count htmega-next htmega-top">${next}</span>
                                <span class="ht-count htmega-next htmega-bottom">${next}</span>
                                <span class="ht-count htmega-curr htmega-bottom">${curr}</span>
                            </div>
                            <span class="htmega-label">${($countdownoptions['lavelhide'] == 'yes') ? '' : $('<p>').text($countdownoptions['htmegaminutestxt']).html()}</span>
                        </div>`)
                } else if (($countdownoptions.htmegasecond == 'yes') && (label.toLowerCase() == 'secs')) {
                    return (`<div class="htmega-time htmega-secs">
                            <div class="htmega-time-inner">
                                <span class="ht-count htmega-curr htmega-top">${curr}</span>
                                <span class="ht-count htmega-next htmega-top">${next}</span>
                                <span class="ht-count htmega-next htmega-bottom">${next}</span>
                                <span class="ht-count htmega-curr htmega-bottom">${curr}</span>
                            </div>
                            <span class="htmega-label">${($countdownoptions['lavelhide'] == 'yes') ? '' : $('<p>').text($countdownoptions['htmegasecondstxt']).html()}</span>
                        </div>`)
                }
            },
            currDate = '00:00:00:00',
            nextDate = '00:00:00:00',
            parser = /([0-9]{2})/gi;

        function strfobj(str) {
            var parsed = str.match(parser),
                obj = {};
            labels.forEach(function(label, i) {
                obj[label] = parsed[i]
            });
            return obj
        }

        function diff(obj1, obj2) {
            var diff = [];
            labels.forEach(function(key) {
                if (obj1[key] !== obj2[key]) {
                    diff.push(key)
                }
            });
            return diff
        }
        var initData = strfobj(currDate);
        labels.forEach(function(label, i) {
            $this.append(template(label, initData[label], initData[label]))
        });
        $this.countdown($time, function(event) {
            var newDate = event.strftime('%D:%H:%M:%S'),
                data;
            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                data = {
                    'curr': strfobj(currDate),
                    'next': strfobj(nextDate)
                };
                diff(data.curr, data.next).forEach(function(label) {
                    var selector = '.%s'.replace(/%s/, `htmega-${label.toLowerCase()}`),
                        $node = $this.find(selector);
                    $node.removeClass('htmega-flip');
                    $node.find('.htmega-curr').text(data.curr[label]);
                    $node.find('.htmega-next').text(data.next[label]);
                    setTimeout(function() {
                        $node.addClass('htmega-flip')
                    })
                })
            }
        })
    }
    var WidgetCountdownMapHandler = function($scope, $) {
        var countdown_elem = $scope.find('[data-countdown]').eq(0);
        if (countdown_elem.length > 0) {
            countdown_elem.each(function() {
                var $this = $(this);
                var countdownoptions = $this.data('countdown');
                if (countdownoptions.style === 'flip') {
                    countDownFlip($this, countdownoptions.htmegadate, countdownoptions)
                } else {
                    $this.countdown(countdownoptions.htmegadate, function(event) {
                        var finalTime, daysTime, hours, minutes, second;
                        if (countdownoptions.lavelhide == 'yes') {
                            daysTime = '<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> </span></span>';
                            hours = '<span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> </span></span>';
                            minutes = '<span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> </span></span>';
                            second = '<span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> </span></span>'
                        } else {
                            daysTime = '<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span>' + $('<p>').text(countdownoptions.htmegadaytxt).html() + '</span></span>';
                            hours = '<span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> ' + $('<p>').text(countdownoptions.htmegahourtxt).html() + '</span></span>';
                            minutes = '<span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span>' + $('<p>').text(countdownoptions.htmegaminutestxt).html() + '</span></span>';
                            second = '<span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span>' + $('<p>').text(countdownoptions.htmegasecondstxt).html() + '</span></span>'
                        }
                        finalTime = daysTime + hours + minutes + second;
                        if (countdownoptions.htmegaday != 'yes') {
                            finalTime = hours + minutes + second
                        }
                        if (countdownoptions.htmegahours != 'yes') {
                            finalTime = daysTime + minutes + second
                        }
                        if (countdownoptions.htmegaminiute != 'yes') {
                            finalTime = daysTime + hours + second
                        }
                        if (countdownoptions.htmegasecond != 'yes') {
                            finalTime = daysTime + hours + minutes
                        }
                        $this.html(event.strftime(finalTime))
                    })
                }
            })
        }
    }
    var WidgetTeamMemberPlusHandler = function($scope, $) {
        var teamPlus_elem = $scope.find('.plus_click').eq(0);
        if (teamPlus_elem.length > 0) {
            teamPlus_elem.on('click', function(e) {
                e.preventDefault();
                $(this).parent('.htmega-team-click-action').toggleClass('visible');
                $(this).toggleClass('team-minus')
            })
        }
    }
    var WidgetNewsTrickerHandler = function($scope, $) {
        var newstricker_elem = $scope.find('.htmega-newstricker').eq(0);
        newstricker_elem[0].parentNode.style.display = 'flex';
        if (newstricker_elem.length > 0) {
            var newstickeropt = newstricker_elem.data('newstrickeropt');
            newstricker_elem.newsTicker({
                row_height: newstickeropt.rowheight,
                max_rows: newstickeropt.maxrows,
                speed: newstickeropt.speed,
                duration: newstickeropt.duration,
                autostart: newstickeropt.autostart,
                direction: newstickeropt.direction,
                pauseOnHover: newstickeropt.pauseonhover,
                prevButton: $('.news-ticker-prev'),
                nextButton: $('.news-ticker-next'),
            })
        }
    }
    var WidgetLightboxHandler = function($scope, $) {
        var lightbox_elem = $scope.find('.image-popup-vertical-fit').eq(0);
        if (lightbox_elem.length > 0) {
            var popupoption = lightbox_elem.data('popupoption');
            lightbox_elem.magnificPopup({
                type: popupoption.datatype,
                closeOnContentClick: !0,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: !0,
                    titleSrc: "This is title",
                },
            })
        }
    }
    var WidgetVideoPlayerHandler = function($scope, $) {
        var videocontainer_elem = $scope.find('.htmega-player-container').eq(0);
        var videotype = videocontainer_elem.data('videotype');
        if (videotype.videocontainer == 'self') {
            var videoplayer_elem = $scope.find('.htmega-video-player').eq(0);
            videoplayer_elem.YTPlayer()
        } else {
            var videopopup_elem = $scope.find('.magnify-video-active').eq(0);
            videopopup_elem.magnificPopup({
                type: 'iframe'
            })
        }
    }
    var WidgetTooltipHandler = function($scope, $) {
        $('[data-toggle="tooltip"]').htbtooltip({
            animation: !1,
        })
    }
    var WidgetPopoversHandler = function($scope, $) {
        $('[data-toggle="popover"]').htbpopover();
        $('[data-toggle="popover"].show').htbpopover('show');
        $('body').on('click', function(e) {
            if ($(e.target).data('toggle') !== 'popover' && $(e.target).parents('.popover.in').length === 0) {
                $('[data-toggle="popover"]').htbpopover('hide')
            }
        })
    }
    var WidgetNotifyHandler = function($scope, $) {
        var notify_elem = $scope.find('.htmega_notify_area').eq(0);
        var notify_opt = notify_elem.data('notifyopt');
        if (notify_elem.length > 0) {
            $(notify_opt.notify_btn_class).on("click", function() {
                $.notify({}, {
                    type: notify_opt.type,
                    element: notify_opt.notify_class,
                    delay: notify_opt.delay,
                    timer: 1000,
                    newest_on_top: !0,
                    mouse_over: null,
                    animate: {
                        enter: 'animated ' + notify_opt.enter,
                        exit: 'animated ' + notify_opt.exit
                    },
                    placement: {
                        from: notify_opt.from,
                        align: notify_opt.align
                    },
                    offset: notify_opt.offset,
                    spacing: 10,
                    z_index: 99999,
                    template: '<div class="htmega-alert-wrap-' + notify_opt.wrapid + ' ' + notify_opt.width + ' alert alert-{0}">' + '<span data-notify="dismiss" class="htmega-close"><i class="fas fa-times"></i></span>' + notify_opt.icon + '<span class="notify-message-content">' + DOMPurify.sanitize(notify_opt.notifymessage) + '</span></div>'
                })
            })
        }
    }
    var WidgetCounterHandler = function($scope, $) {
        var count_elem = $scope.find('.htmega-counter-number').eq(0);
        var waypoint = new Waypoint({
            element: count_elem[0],
            handler: function(direction) {
                if (direction === 'down') {
                    $(count_elem).numerator({
                        easing: 'swing',
                        duration: 2000,
                        toValue: parseFloat(count_elem[0].dataset.toValue)
                    })
                }
                this.destroy()
            },
            offset: '90%'
        })
    }
    var WidgetImageMasonaryHandler = function($scope, $) {
        var masonry_elem = $scope.find('.htmega-masonry-activation').eq(0);
        if (masonry_elem.length > 0) {
            masonry_elem.imagesLoaded(function() {
                masonry_elem[0].style.display = 'block';
                $('.masonry-wrap').isotope({
                    itemSelector: '.masonary-item',
                    percentPosition: !0,
                    transitionDuration: '0.7s',
                    masonry: {
                        columnWidth: '.masonary-sizer',
                    }
                })
            })
        }
    }
    var WidgetNavigationScrollHandler = function($scope, $) {
        var swiper_elem = $scope.find('.swiper-container').eq(0);
        var swiper_opt = swiper_elem.data('settings');
        var tablet_width = parseInt(swiper_opt.tablet_width);
        var mobile_width = parseInt(swiper_opt.mobile_width);
        var swiper = new Swiper(swiper_elem[0], {
            direction: swiper_opt.direction,
            slidesPerView: swiper_opt.slideitem,
            initialSlide: swiper_opt.initialslide,
            spaceBetween: 0,
            simulateTouch: swiper_opt.simulateTouch,
            mousewheel: {
                releaseOnEdges: !0,
            },
            speed: swiper_opt.speed,
            pagination: {
                el: '.swiper-pagination',
                clickable: !0,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: swiper_opt.keyboardscroll,
                onlyInViewport: !1,
            },
            breakpoints: {
                [tablet_width]: {
                    direction: swiper_opt.tablet_direction,
                },
                [mobile_width]: {
                    direction: swiper_opt.mobile_direction,
                },
            }
        });
        if (swiper_opt.mousewheel == !1) {
            swiper.mousewheel.disable()
        }
        if (!0 == swiper_opt.slide_custom_menu) {
            $('a[href^="#htmega-scroll-slide"]').on('click', function(e) {
                e.preventDefault();
                var fullIndex = $(this).attr('href');
                var slideIndex = parseInt(fullIndex.replace('#htmega-scroll-slide-', ''), 0);
                if (fullIndex !== slideIndex && slideIndex > 0) {
                    swiper.slideTo(slideIndex - 1)
                }
            })
        }
    }
    var WidgetPostGridHandler = function($scope, $) {
        var postgridtab_elem = $scope.find('.ht-post-grid-tab').eq(0);
        var postgridtab_opt = postgridtab_elem.data('postgridtab');
        if (postgridtab_elem.length > 0) {
            $('.post-gridthumb-' + postgridtab_opt.wrapid + '').each(function() {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $(this).next('.post-gridcontent-' + postgridtab_opt.wrapid + '').slideToggle().siblings('.post-gridcontent-' + postgridtab_opt.wrapid + '').slideUp();
                    $(this).next('.post-gridcontent-' + postgridtab_opt.wrapid + '').toggleClass('is-visible').siblings('.post-gridcontent-').removeClass('is-visible')
                })
            });
            $('.post-gridclose-' + postgridtab_opt.wrapid + '').on('click', function() {
                $(this).parent('.post-gridcontent-' + postgridtab_opt.wrapid + '').slideUp()
            })
        }
    }
    var WidgetImageComparisonHandler = function($scope, $) {
        $.fn.BeerSlider = function(options) {
            options = options || {};
            return this.each(function() {
                new BeerSlider(this, options)
            })
        };
        $(".beer-slider").each(function(index, el) {
            $(el).BeerSlider({
                start: $(el).data("start")
            })
        })
    }
    var WidgetTabControll = function tabeCarouselController() {
        htmegaTabsCarouselRefress($(".htmega-tab-nav"))
    }
    var WidgetSwithcerControll = function switcherCarouselController() {
        htmegaTabsCarouselRefress($(".htmega-switcher-nav"))
    }

    function htmegaTabsCarouselRefress($tabmenus) {
        $tabmenus.on('click', 'a', function(e) {
            e.preventDefault();
            if ($('.slick-slider').length > 0) {
                var $id = $(this).attr('href');
                $($id).find('.slick-slider').slick('refresh')
            }
        })
    }
    var HTMegaAudioPlayer = function($scope, $) {
        var container_elem = $scope.find('.htmega-audio-player-wrapper').eq(0);
        if (container_elem.length > 0) {
            container_elem[0].style.display = 'flex';
            var settings = container_elem.data('audio-settings');
            var activeUniqClass = container_elem.find('.htmega-audio-player');
            activeUniqClass.mediaelementplayer({
                shimScriptAccess: "always",
                alwaysShowControls: !0,
                features: settings.features,
                hideVolumeOnTouchDevices: !0,
                startVolume: parseFloat(settings.startVolume),
                audioVolume: settings.audioVolume,
                autoRewind: !0,
                enableAutosize: !0,
                stretching: 'auto',
                classPrefix: 'mejs-',
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                duration: -1,
                success: function(mediaElement, originalNode, instance) {
                    mediaElement.setCurrentTime(parseFloat(settings.restrictTime));
                    mediaElement.addEventListener('progress', function() {
                        const duration = mediaElement.duration;
                        const durationContainer = $(mediaElement).siblings('.mejs__time-total').find('.mejs__duration');
                        if (durationContainer.length > 0) {
                            durationContainer.text(mediaElement.formatTime(duration))
                        }
                    });
                    if (mediaElement) {
                        mediaElement.load()
                    }
                }
            });
            if (settings ? .playerIcons) {
                let playPauseButton = container_elem.find(".mejs-playpause-button button"),
                    volumeButtion = container_elem.find(".mejs-volume-button button");
                playPauseButton.html(`<i aria-hidden="true" class="htmega-audio-play ${settings.playerIcons.play}"></i><i aria-hidden="true" class="htmega-audio-pause ${settings.playerIcons.pause}"></i><i aria-hidden="true" class="htmega-audio-replay ${settings.playerIcons.replay}"></i>`), volumeButtion.html(`<i aria-hidden="true" class="htmega-audio-unmute ${settings.playerIcons.unmute}"></i><i aria-hidden="true" class="htmega-audio-mute ${settings.playerIcons.mute}"></i>`)
            }
        }
    }
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-tab-addons.default', WidgetTabControll);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-google-map-addons.default', WidgetGoogleMapHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-accordion-addons.default', WidgetAccordionsMapHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-progressbar-addons.default', WidgetPieChartMapHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-countdown-addons.default', WidgetCountdownMapHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-team-member-addons.default', WidgetTeamMemberPlusHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-testimonial-addons.default', WidgetTestimonialCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-newtsicker-addons.default', WidgetNewsTrickerHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-magnific-popup-addons.default', WidgetLightboxHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-videoplayer-addons.default', WidgetVideoPlayerHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-instagram-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-tooltip-addons.default', WidgetTooltipHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-popover-addons.default', WidgetPopoversHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-notify-addons.default', WidgetNotifyHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-counter-addons.default', WidgetCounterHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-postslider-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-thumbgallery-addons.default', WidgetHtmegaThumbnailsgalleryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-imagemasonryd-addons.default', WidgetImageMasonaryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-scrollnavigation-addons.default', WidgetNavigationScrollHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-twitterfeed-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-carousel-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-postcarousel-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-postgridtab-addons.default', WidgetPostGridHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-imagecomparison-addons.default', WidgetImageComparisonHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-panelslider-addons.default', WidgetHtmegaCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-switcher-addons.default', WidgetSwithcerControll);
        elementorFrontend.hooks.addAction('frontend/element_ready/htmega-audio-player-addons.default', HTMegaAudioPlayer)
    })
})(jQuery);