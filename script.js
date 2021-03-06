$(document).ready(function() {
 
// make <p> red when clicked

    $('p').on('click', function() {
        $('p').css('color', 'red');
    });

// give <h2> a background color lightblue when hovered

    $('h2').hover(function() {
        $('h2').css('background-color', 'lightblue');
    })

// changing font sizes of only the clicked <h2> elements

    $('#head_HTML').hover(function(){
        $('#head_HTML').css('font-size', '1.5em');
        $('#head_MySql').css('font-size', '1em');
        $('#head_Python').css('font-size', '1em');
        $('#head_jQuery').css('font-size', '1em');
        $('#head_Django').css('font-size', '1em');
        $('#head_CSS').css('font-size', '1em');
    })
    $('#head_MySql').hover(function(){
        $('#head_HTML').css('font-size', '1em');
        $('#head_MySql').css('font-size', '1.5em');
        $('#head_Python').css('font-size', '1em');
        $('#head_jQuery').css('font-size', '1em');
        $('#head_Django').css('font-size', '1em');
        $('#head_CSS').css('font-size', '1em');
    })
    $('#head_Python').hover(function(){
        $('#head_HTML').css('font-size', '1em');
        $('#head_MySql').css('font-size', '1em');
        $('#head_Python').css('font-size', '1.5em');
        $('#head_jQuery').css('font-size', '1em');
        $('#head_Django').css('font-size', '1em');
        $('#head_CSS').css('font-size', '1em');
    })
    $('#head_jQuery').hover(function(){
        $('#head_HTML').css('font-size', '1em');
        $('#head_MySql').css('font-size', '1em');
        $('#head_Python').css('font-size', '1em');
        $('#head_jQuery').css('font-size', '1.5em');
        $('#head_Django').css('font-size', '1em');
        $('#head_CSS').css('font-size', '1em');
    })
    $('#head_Django').hover(function(){
        $('#head_HTML').css('font-size', '1em');
        $('#head_MySql').css('font-size', '1em');
        $('#head_Python').css('font-size', '1em');
        $('#head_jQuery').css('font-size', '1em');
        $('#head_Django').css('font-size', '1.5em');
        $('#head_CSS').css('font-size', '1em');
    })
    $('#head_CSS').hover(function(){
        $('#head_HTML').css('font-size', '1em');
        $('#head_MySql').css('font-size', '1em');
        $('#head_Python').css('font-size', '1em');
        $('#head_jQuery').css('font-size', '1em');
        $('#head_Django').css('font-size', '1em');
        $('#head_CSS').css('font-size', '1.5em');
    })

// hovering button will make background of the body go black.
// after hover it'll go grey

    $('.bottom_button').hover(function() {
        $('body').css('background-color', 'black');
    });
    $('.bottom_button').mouseleave(function(){
        $('body').css('background-color', 'grey');
    });

    $('#button1').click(function(){
        $('#button1').hide('slow');
    });

    $('#button2').click(function(){
        $('#par_toggle').toggle();
    })

    $('#button3').click(function(){
        $('#par_slidet').slideToggle('medium');
    })

    $('#button4').mouseenter(function(){
        $('#par_fadeto').fadeTo('medium', 0.5);
    })
    $('#button4').mouseleave(function(){
        $('#par_fadeto').fadeTo('medium', 1);
    })
}); 
