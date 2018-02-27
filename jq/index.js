$(function(){

    /* PRELOADER */
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    });

    /* PAROLLER */
    $("[data-paroller-factor]").paroller();

	/* SMOOTH SCROLL */
    $('a[href^="#"]').on('click', function(event) {

    	var target = $( $(this).attr('href') );

    	if( target.length ) {
        	event.preventDefault();
        	$('html, body').animate({
            	scrollTop: target.offset().top
        	}, 'slow');
    	}

	});

    /* NAV */
    $(window).scroll(function() {
        var addRemClass = $(window).scrollTop() > 0 ? 'addClass' : 'removeClass';
        $(".navbar")[addRemClass]('bgChange');
    });

    $(window).scroll(function() {
        var addRemClass2 = $(window).scrollTop() > 0 ? 'addClass' : 'removeClass';
        $(".nav-name")[addRemClass2]('bgChange2');
    });

	/* OPACITY ON SCROLL */
    var header = $('#home-banner');
    var range = 200;

    $(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 2,
        calc = 2.3 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if (calc > '1') {
            header.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            header.css({ 'opacity': 0 });
        }
  
    });


    $('#index-about').on('mousemove',function(){
        $('#blk-profile').animate({
            'width':'175%'
        },1000);
    });

    $('#index-services').on('mousemove',function(){
        $('#blk-ser').animate({
            'width':'150%'
        },1000);
    });

    $(window).resize(function(){
        if ($(window).width() <= 768){  
        
            $('#index-about').on('mousemove',function(){
                $('#blk-profile').animate({
                    'height':'1%',
                    'width':'1%',
                    'background-color':'#EBEBEB'
                },'slow');
            });
        }   
    });


    $('#downloader').click(function(e) {
        e.preventDefault();  //stop the browser from following
        window.location.href = 'uploads/Paulos Resume.pdf';
    });

});