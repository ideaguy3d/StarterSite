var main2 = function () {
    
    $('.dropdown-toggle').click(function () {
    $('.dropdown-menu').toggle();
    });

    $('#jSpan').hover(function () {
        $('#jSpan').text("You just hovered over me.");
    }, function () {
        $('#jSpan').text("a Manufacturer.");
    });
};

var main = function () {
    //prompt('hi there');
    $('.icon-menu').click(function () {
        $('body').animate({ left: '285px' }, 200);
        $('.menu').animate({ left: '0px' }, 200);
    });

    $('.icon-close').click(function () {
        $('body').animate({ left: '0px' }, 200);
        $('.menu').animate({ left: '-285px' }, 200);
    });

    $('.article').click(function () {
        var didHave = $(this).hasClass('current');
        
        $('.article').removeClass('current');
        $('.description').hide();

        if (!didHave) {
            $(this).addClass('current');
            $(this).children('.description').show();
        } 
    });

    /*
    $('.current').click(function(){
        $(this).removeClass('current');
    });
    */
    
};


$(document).ready(main);