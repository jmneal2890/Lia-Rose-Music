$ = require('jquery');
slick_carousel = require('slick-carousel');


//Main jQuery section
$(document).ready(function() {

//Project scroll to reavel
  $(window).scroll(function() {
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity':'1', 'top':'0px'},500, 'linear');
      }
      });

  });

//Navigation scroll on click
  $(document).on('click', '.scroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 72
    }, 500, 'swing');
});


//Music button control

var project = 'lia';

	function musicSelect() {
		var newProject = $(this).attr('data-alt');
    const bftsSpot = 'https://embed.spotify.com/?uri=spotify%3Aartist%3A0XQlsjYCX4a81az5p9zwuY';
    const liaSpot = 'https://embed.spotify.com/?uri=spotify%3Aartist%3A5c1Ag67oqsK5rOUtOmK9J0';
    const tbmSpot = 'https://embed.spotify.com/?uri=spotify%3Auser%3A129626194%3Aplaylist%3A2BpEayGdQnxkzAEp44IFqO';

    function themeChange(project, color, color2){
      $('.playlist').find('iframe').fadeOut('fast', function() {
        $(this).attr('src', project);
        $('.theme-control').css('background-color', color);
        $('.fixed').css('background-color', color2);
        $('.dropdown-content').css('background-color', color2);
        $(this).delay(250).fadeIn('slow');
      });
    };

		if (project !== newProject) {
			project = newProject;
			$('.container').attr('src', 'images/music_' + project + '.png');
	    if (project == 'bfts') {
        themeChange(bftsSpot, '#8F96A5', '#242B3B');
	    } else if (project == 'lia') {
        themeChange(liaSpot, '#A9E1ED', '#238BA1');
	    } else if (project == 'tbm') {
        themeChange(tbmSpot, '#EDC7B5', '#AC6E51');
	    }
		} else {
			console.log(project);
		}



	};

	$('.project_image').on('click', musicSelect);
	$('area').on('click', musicSelect);
	$('.sub_music').on('click', musicSelect);


	//Sticky nav
	  var navOffset = $('ul').offset().top;

	  $('.nav').wrap('<div class="nav-placeholder"></div>');
	  $('.nav-placeholder').height($('#nav').outerHeight());

	  $('.nav').wrapInner('<div class="nav-inner"> </div>');
	  $('.nav-inner').wrapInner('<div class="nav-inner-most"> </div>');

	  $(window).scroll(function() {
	    var scrollPos = $(window).scrollTop();

	  if (scrollPos >= navOffset) {
	    $('.nav').addClass('fixed').find('p').css('color', 'white').closest('.nav').find('a').css('color', 'white');
	  } else {
	    $('.nav').removeClass('fixed').find('p').css('color', '#242B3B').closest('.nav').find('a').css('color', '#242B3B');
	  }

	  });


//slick control
$('.slider').slick({
});




//Main Jquery closing tag
});
