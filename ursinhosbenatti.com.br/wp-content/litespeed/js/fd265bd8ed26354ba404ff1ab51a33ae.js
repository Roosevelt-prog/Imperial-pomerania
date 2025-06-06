(function() {
    var supportsPassive = !1;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = !0
            }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts)
    } catch (e) {}

    function init() {
        var input_begin = '';
        var keydowns = {};
        var lastKeyup = null;
        var lastKeydown = null;
        var keypresses = [];
        var modifierKeys = [];
        var correctionKeys = [];
        var lastMouseup = null;
        var lastMousedown = null;
        var mouseclicks = [];
        var mousemoveTimer = null;
        var lastMousemoveX = null;
        var lastMousemoveY = null;
        var mousemoveStart = null;
        var mousemoves = [];
        var touchmoveCountTimer = null;
        var touchmoveCount = 0;
        var lastTouchEnd = null;
        var lastTouchStart = null;
        var touchEvents = [];
        var scrollCountTimer = null;
        var scrollCount = 0;
        var correctionKeyCodes = ['Backspace', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'];
        var modifierKeyCodes = ['Shift', 'CapsLock'];
        var forms = document.querySelectorAll('form[method=post]');
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            var formAction = form.getAttribute('action');
            if (formAction) {
                if (formAction.indexOf('http://') == 0 || formAction.indexOf('https://') == 0) {
                    if (formAction.indexOf('http://' + window.location.hostname + '/') != 0 && formAction.indexOf('https://' + window.location.hostname + '/') != 0) {
                        continue
                    }
                }
            }
            form.addEventListener('submit', function() {
                var ak_bkp = prepare_timestamp_array_for_request(keypresses);
                var ak_bmc = prepare_timestamp_array_for_request(mouseclicks);
                var ak_bte = prepare_timestamp_array_for_request(touchEvents);
                var ak_bmm = prepare_timestamp_array_for_request(mousemoves);
                var input_fields = {
                    'bib': input_begin,
                    'bfs': Date.now(),
                    'bkpc': keypresses.length,
                    'bkp': ak_bkp,
                    'bmc': ak_bmc,
                    'bmcc': mouseclicks.length,
                    'bmk': modifierKeys.join(';'),
                    'bck': correctionKeys.join(';'),
                    'bmmc': mousemoves.length,
                    'btmc': touchmoveCount,
                    'bsc': scrollCount,
                    'bte': ak_bte,
                    'btec': touchEvents.length,
                    'bmm': ak_bmm
                };
                var akismet_field_prefix = 'ak_';
                if (this.getElementsByClassName) {
                    var possible_akismet_containers = this.getElementsByClassName('akismet-fields-container');
                    for (var containerIndex = 0; containerIndex < possible_akismet_containers.length; containerIndex++) {
                        var container = possible_akismet_containers.item(containerIndex);
                        if (container.getAttribute('data-prefix')) {
                            akismet_field_prefix = container.getAttribute('data-prefix');
                            break
                        }
                    }
                }
                for (var field_name in input_fields) {
                    var field = document.createElement('input');
                    field.setAttribute('type', 'hidden');
                    field.setAttribute('name', akismet_field_prefix + field_name);
                    field.setAttribute('value', input_fields[field_name]);
                    this.appendChild(field)
                }
            }, supportsPassive ? {
                passive: !0
            } : !1);
            form.addEventListener('keydown', function(e) {
                if (e.key in keydowns) {
                    return
                }
                var keydownTime = (new Date()).getTime();
                keydowns[e.key] = [keydownTime];
                if (!input_begin) {
                    input_begin = keydownTime
                }
                var lastKeyEvent = Math.max(lastKeydown, lastKeyup);
                if (lastKeyEvent) {
                    keydowns[e.key].push(keydownTime - lastKeyEvent)
                }
                lastKeydown = keydownTime
            }, supportsPassive ? {
                passive: !0
            } : !1);
            form.addEventListener('keyup', function(e) {
                if (!(e.key in keydowns)) {
                    return
                }
                var keyupTime = (new Date()).getTime();
                if ('TEXTAREA' === e.target.nodeName || 'INPUT' === e.target.nodeName) {
                    if (-1 !== modifierKeyCodes.indexOf(e.key)) {
                        modifierKeys.push(keypresses.length - 1)
                    } else if (-1 !== correctionKeyCodes.indexOf(e.key)) {
                        correctionKeys.push(keypresses.length - 1)
                    } else {
                        var keydownTime = keydowns[e.key][0];
                        var keypress = [];
                        keypress.push(keyupTime - keydownTime);
                        if (keydowns[e.key].length > 1) {
                            keypress.push(keydowns[e.key][1])
                        }
                        keypresses.push(keypress)
                    }
                }
                delete keydowns[e.key];
                lastKeyup = keyupTime
            }, supportsPassive ? {
                passive: !0
            } : !1);
            form.addEventListener("focusin", function(e) {
                lastKeydown = null;
                lastKeyup = null;
                keydowns = {}
            }, supportsPassive ? {
                passive: !0
            } : !1);
            form.addEventListener("focusout", function(e) {
                lastKeydown = null;
                lastKeyup = null;
                keydowns = {}
            }, supportsPassive ? {
                passive: !0
            } : !1)
        }
        document.addEventListener('mousedown', function(e) {
            lastMousedown = (new Date()).getTime()
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('mouseup', function(e) {
            if (!lastMousedown) {
                return
            }
            var now = (new Date()).getTime();
            var mouseclick = [];
            mouseclick.push(now - lastMousedown);
            if (lastMouseup) {
                mouseclick.push(lastMousedown - lastMouseup)
            }
            mouseclicks.push(mouseclick);
            lastMouseup = now;
            lastKeydown = null;
            lastKeyup = null;
            keydowns = {}
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('mousemove', function(e) {
            if (mousemoveTimer) {
                clearTimeout(mousemoveTimer);
                mousemoveTimer = null
            } else {
                mousemoveStart = (new Date()).getTime();
                lastMousemoveX = e.offsetX;
                lastMousemoveY = e.offsetY
            }
            mousemoveTimer = setTimeout(function(theEvent, originalMousemoveStart) {
                var now = (new Date()).getTime() - 500;
                var mousemove = [];
                mousemove.push(now - originalMousemoveStart);
                mousemove.push(Math.round(Math.sqrt(Math.pow(theEvent.offsetX - lastMousemoveX, 2) + Math.pow(theEvent.offsetY - lastMousemoveY, 2))));
                if (mousemove[1] > 0) {
                    mousemoves.push(mousemove)
                }
                mousemoveStart = null;
                mousemoveTimer = null
            }, 500, e, mousemoveStart)
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('touchmove', function(e) {
            if (touchmoveCountTimer) {
                clearTimeout(touchmoveCountTimer)
            }
            touchmoveCountTimer = setTimeout(function() {
                touchmoveCount++
            }, 500)
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('touchstart', function(e) {
            lastTouchStart = (new Date()).getTime()
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('touchend', function(e) {
            if (!lastTouchStart) {
                return
            }
            var now = (new Date()).getTime();
            var touchEvent = [];
            touchEvent.push(now - lastTouchStart);
            if (lastTouchEnd) {
                touchEvent.push(lastTouchStart - lastTouchEnd)
            }
            touchEvents.push(touchEvent);
            lastTouchEnd = now;
            lastKeydown = null;
            lastKeyup = null;
            keydowns = {}
        }, supportsPassive ? {
            passive: !0
        } : !1);
        document.addEventListener('scroll', function(e) {
            if (scrollCountTimer) {
                clearTimeout(scrollCountTimer)
            }
            scrollCountTimer = setTimeout(function() {
                scrollCount++
            }, 500)
        }, supportsPassive ? {
            passive: !0
        } : !1)
    }

    function prepare_timestamp_array_for_request(a, limit) {
        if (!limit) {
            limit = 100
        }
        var rv = '';
        if (a.length > 0) {
            var random_starting_point = Math.max(0, Math.floor(Math.random() * a.length - limit));
            for (var i = 0; i < limit && i < a.length; i++) {
                rv += a[random_starting_point + i][0];
                if (a[random_starting_point + i].length >= 2) {
                    rv += "," + a[random_starting_point + i][1]
                }
                rv += ";"
            }
        }
        return rv
    }
    if (document.readyState !== 'loading') {
        init()
    } else {
        document.addEventListener('DOMContentLoaded', init)
    }
})();