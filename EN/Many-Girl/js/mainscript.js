$(function () {
    $('.btn, .yes, .no').click(function () {
        var qLength = $('.steps > ul > li').length
        var curIndex = $(this).closest('.step').index() + 1
        if (curIndex < qLength) {
            $(this).closest('.step').hide().next().fadeIn()
        }
    })

    $('.agree').click(function () {
        $('.wrap').css('display', 'none')
    })
})




