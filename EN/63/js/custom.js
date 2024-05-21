// STEPS
$(document).ready(function() {
    var current = 0;
    var $slideBg = $('.preload_images span');

    function bgChange() {
        $slideBg.removeClass('active').eq(current).addClass('active');
        if (current < 1) {
            current++;
        } else {
            current = 0;
        }
    }
    bgChange();
    $('.btns').click(function() {
        $(this).closest('.step').hide().next('.step').fadeIn();
        if ($(this).hasClass('start_animation')) {
            $('body').addClass('active');
            $('.preload_images').fadeIn();
            setInterval(bgChange, 6000);
        }
    });
    $('.checkbox_item').click(function() {
        $(this).toggleClass('checked');
    });
});
$(function() {
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
});

$(function() {
    $(this).bind("contextmenu", function(n) {
        n.preventDefault()
    }), $("#password, #email-email").keypress(function(n) {
        return 13 == n.which ? !1 : void 0
    })
})