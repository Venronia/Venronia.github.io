function openPopup() {
    $("body").addClass("show-popup");
}

function closePopup() {
    $("body").removeClass("show-popup");
}

$(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function() {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var top_of_object = $(this).offset().top
        var bottom_of_window = $(window).scrollTop() + window.innerHeight;
        var top_of_window = $(window).scrollTop()
            // console.log('bottom_of_object');
            // console.log(bottom_of_object);
            // console.log('bottom_of_window');
            // console.log(bottom_of_window);

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object && top_of_window < top_of_object) {
            if ($(this).css('opacity') == 0) {
                $(this).animate({ 'opacity': '1' }, 800);
                console.log('Display yooooooooooooooooooooooooooooo');
            }
        } else {
            if ($(this).css('opacity') == 1) {
                $(this).css('opacity', 0);
                console.log('Hide yoooooooooooooooooooo');
            }
        }


        // if window.scrollTop + window.innerHeight > object.top + object.Height()
        // Do something
        // TODO 



        // if window.scrollTop < object.top 
        // Do something
        // TODO 

        // Else do something
        // TODO

    });

});


$(document).ready(function() {
    $(".showtitle").animate({ 'opacity': '1' }, 2000);

    // $("#home button").click(function() {
    //     $("#home h1").html("Vennu");
    // });
});