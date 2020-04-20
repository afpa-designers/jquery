$(document).ready(function () {

    $("#loading").animate({
        opacity: 0
    }, 2500, function () {
        // Animation complete.
        $(this).hide();
        $(this).remove();
    });
    $('header').next().css('margin-top', $('header').height());

        

    $('#dark-mode').on('click', function () {
        $('body ,section, header, nav').toggleClass('bg-dark').toggleClass('text-light');
        $('.navbar').toggleClass('navbar-light').toggleClass('text-dark')
        $('body ,section, header, nav').toggleClass('bg-light').toggleClass('text-dark');
        $('.navbar').toggleClass('navbar-dark').toggleClass('text-light')
    });
    
});

