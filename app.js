function risk_levels(e) {
	e.preventDefault();

	var levelNum = jQuery(this).data('level');
	jQuery('.fill_col').removeClass('active');

	switch ( levelNum ) {
		case 'zero':
			jQuery('.fill_col-zero').addClass('active');
			break;
		case 'one':
			jQuery('.fill_col-zero').addClass('active');
			jQuery('.fill_col-one').addClass('active');
			break;
		case 'two':
			jQuery('.fill_col-zero').addClass('active');
			jQuery('.fill_col-one').addClass('active');
			jQuery('.fill_col-two').addClass('active');
			break;
		case 'three':
			jQuery('.fill_col-zero').addClass('active');
			jQuery('.fill_col-one').addClass('active');
			jQuery('.fill_col-two').addClass('active');
			jQuery('.fill_col-three').addClass('active');
			break;
		case 'four':
			jQuery('.fill_col-zero').addClass('active');
			jQuery('.fill_col-one').addClass('active');
			jQuery('.fill_col-two').addClass('active');
			jQuery('.fill_col-three').addClass('active');
			jQuery('.fill_col-four').addClass('active');
			break;
		case 'five':
			jQuery('.fill_col-zero').addClass('active');
			jQuery('.fill_col-one').addClass('active');
			jQuery('.fill_col-two').addClass('active');
			jQuery('.fill_col-three').addClass('active');
			jQuery('.fill_col-four').addClass('active');
			jQuery('.fill_col-five').addClass('active');
			break;
		default:
			jQuery('.fill_col').removeClass('active');
	}
}
jQuery('.risk_bubble').on('click', risk_levels);


function showRiskInfo() {
	var riskLev = jQuery(this).data('risklev');

	console.log( riskLev );

	switch ( riskLev ) {
		case 'zero': jQuery('.explanation_num-zero').addClass('activadoe'); break;
		case 'one': jQuery('.explanation_num-one').addClass('activadoe'); break;
		case 'two': jQuery('.explanation_num-two').addClass('activadoe'); break;
		case 'three': jQuery('.explanation_num-three').addClass('activadoe'); break;
		case 'four': jQuery('.explanation_num-four').addClass('activadoe'); break;
		case 'five': jQuery('.explanation_num-five').addClass('activadoe'); break;
		default:
			jQuery('.explanation').removeClass('activadoe');
	} 

	// jQuery('.explanation_num-zero').addClass('activadoe');
}

jQuery('.question').on('mouseover', showRiskInfo);

function hideRiskInfo() {
	jQuery('.explanation').removeClass('activadoe');
}

jQuery('.question').on('mouseout', hideRiskInfo);

/* SHOW/HIDE SUBHEADER FOR REGISTER-ORG PAGE */

function showSubheader() {
	var main = jQuery('main');
	if (main.hasClass('register_banner_text') ) {
		jQuery('.height_zero').animate({
			height : "6rem",
		});
	}
}
setTimeout(showSubheader,4000);

function hideSubheader() {
	var main = jQuery('main');
	if (main.hasClass('register_banner_text') ) {
		jQuery('.height_zero').animate({
			height : "0rem",
		});
	}
}
jQuery('.close_sub').on('click', hideSubheader);


function showNotice() {
	var main = jQuery('main');
	if ( ( main.hasClass('become_vol_box') ) || ( main.hasClass('register_banner_text') ) ) {

		jQuery('.notice_message').removeClass('zero_width');

	}
}
setTimeout(showNotice,500);

/* BURGER MENU */

function mobileMenu(e) {
	e.preventDefault();
	jQuery('.mobile_menu').toggleClass('active');
	jQuery('.burger_menu').toggleClass('active');
}
jQuery('#mobile-menu').on('click', mobileMenu);



/* FILTER SIDEBARS */

function slideFilters(e) {
	e.preventDefault();
	jQuery('.filters').toggleClass('show_filters');
	var startText = ' Search Filters';
	var closeText = ' Hide Filters';
	var currentText = jQuery('.filter_search').html();
	console.log(currentText);
	if (currentText === ' Search Filters') {
		jQuery('.filter_search').html(closeText);
	}else {
		jQuery('.filter_search').html(startText);
	}
}
jQuery('.filter_search').on('click', slideFilters);



$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$( ".sdg_input" ).click(function() {
  $( this ).closest('label').toggleClass("checked");
});



/* SLIDE DOWN OPTIONS / SHOW FORM CHECKBOXES */

function toggleCheckboxes() {
	var flyoutMenu = jQuery('.checkbox_title').next('.sdg_checkboxes_columns');
	var flyoutMenuToOpen = jQuery(this).next('.sdg_checkboxes_columns');
	var doesIthasclass = jQuery(this).hasClass('hidden');

	if ( !doesIthasclass ) {
		jQuery(this).addClass('hidden');
		flyoutMenuToOpen.addClass('hidden');


	}

	jQuery('.checkbox_title').addClass('hidden');
	flyoutMenu.addClass('hidden');

	jQuery(this).removeClass('hidden');
	flyoutMenuToOpen.removeClass('hidden');


}

jQuery('.checkbox_title').on('click', toggleCheckboxes);




// POP UP WINDOW

function popUpWindow(e) {
	e.preventDefault();
	jQuery('.donate_popup').addClass('show');
	jQuery('.donate_banner').addClass('blur_in');
	jQuery('.call_to_action_banner').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}

jQuery('.pop-up-window').on('click', popUpWindow);

function popUpWindowHours(e) {
	e.preventDefault();
	jQuery('.hours_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.log_popUp').on('click', popUpWindowHours);

function popUpWindowRecipients(e) {
	e.preventDefault();
	jQuery('.recipients_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.recipients_popUp').on('click', popUpWindowRecipients);
function popUpWindowRecipientsPartners(e) {
	e.preventDefault();
	jQuery('.partners_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.partners_popUp').on('click', popUpWindowRecipientsPartners);

function popUpWindowMessage(e) {
	e.preventDefault();
	jQuery('.message_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.email_popUp').on('click', popUpWindowMessage);
function popUpWindowSentMessage(e) {
	e.preventDefault();
	jQuery('.sentMessage_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.sentMessage_popUp').on('click', popUpWindowSentMessage);

function popUpWindowView(e) {
	e.preventDefault();
	jQuery('.view_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.view_popUp').on('click', popUpWindowView);

function popUpWindowContact(e) {
	e.preventDefault();
	jQuery('.contact_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.contact_popUp').on('click', popUpWindowContact);

function popUpWindowConfirmation(e) {
	e.preventDefault();
	jQuery('.confirmation_popup').addClass('show');
	jQuery('.profile_dashboard').addClass('blur_in');
	jQuery('.submenu').addClass('blur_in');
	jQuery('.page-header').addClass('blur_in');
	jQuery('.site_footer').addClass('blur_in');
	jQuery('.subheader').addClass('blur_in');
}
jQuery('.delete_popUp').on('click', popUpWindowConfirmation);
jQuery('.approve_popUp').on('click', popUpWindowConfirmation);
jQuery('.disapprove_popUp').on('click', popUpWindowConfirmation);
// jQuery('a.disapprove')on('click', popUpWindowConfirmation);
// jQuery('a.delete')on('click', popUpWindowConfirmation);

function ClosePopUpWindow(e) {
	e.preventDefault();
	jQuery('.pop_up_container').removeClass('show');
	jQuery('.donate_banner').removeClass('blur_in');
	jQuery('.call_to_action_banner').removeClass('blur_in');
	jQuery('.profile_dashboard').removeClass('blur_in');
	jQuery('.submenu').removeClass('blur_in');
	jQuery('.page-header').removeClass('blur_in');
	jQuery('.site_footer').removeClass('blur_in');
	jQuery('.subheader').removeClass('blur_in');
}

jQuery('.close_btn').on('click', ClosePopUpWindow);



// SMOOTH SCROLL

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// BACK TO TOP

  var $backToTop = $(".back_to_top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});



























/* SLIDER */

var nrDiapos, anchoDiapos, minLimite, maxLimite, contador;
var slider = $('.slider');


function inicializarSlider(){

	nrDiapos = $('.slide').length;
	anchoDiapos = $('.slide').outerWidth();
	minLimite = 0;
	maxLimite = nrDiapos - 1;

	if( !contador ){
		contador = 0;
	}

	var pos = -(contador * anchoDiapos) + 'px';
	slider.css('margin-left', pos);
}




inicializarSlider();
$(window).on('resize', inicializarSlider);



// Controles

$('#next').on('click',moverAdelante);
$('#prev').on('click',moverAtras);
$('.bullet').on('click',avanzar);


function moverAdelante(e){
	e.preventDefault();
	
	contador++; // contador = contador+1

	if( contador > maxLimite ){
		contador--;
		rebotarAdelante();
		return false;
	}

	slider.animate({
		'margin-left' : -(contador * anchoDiapos) + 'px'
	},500);

}




function moverAtras(e){
	e.preventDefault();
	
	contador--; // contador = contador-1

	if( contador < minLimite ){
		contador++;
		rebotarAtras();
		return false;
	}

	slider.animate({
		'margin-left' : -(contador * anchoDiapos) + 'px'
	},500);

}





function rebotarAdelante(){

	var margin = -( contador * anchoDiapos );

	slider.animate({
		'margin-left' : (margin - 50) + 'px'
	},200,function(){
		slider.animate({
			'margin-left' : margin + 'px'
		},200)
	});
}

function rebotarAtras(){

	var margin = -( contador * anchoDiapos );

	slider.animate({
		'margin-left' : (margin + 50) + 'px'
	},200,function(){
		slider.animate({
			'margin-left' : margin + 'px'
		},200)
	});
}


function avanzar(e){
	e.preventDefault();
	$('.bullet').removeClass('active');
	contador = $('.bullet').index( $(this) );
	$(this).addClass('active');
	slider.animate({
		'margin-left' : -(contador * anchoDiapos) + 'px'
	},500);
}













