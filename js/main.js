/***********************
 agmodal BEGIN
 ***********************/
$(document).ready(function(){
	$('.modal').agmodal({
		effect: 'fade',
		overlayColor: 'rgba(37, 49, 69, 0.5)'
	});

	$('.modal-close').on('click',function (e) {
		e.preventDefault();
		$(this).parents('.modal').agmodal('close');
	});
});
/***********************
 agmodal END
 ***********************/

/***********************
Trial modal BEGIN
***********************/
function open_trial_modal() {
	$('.trial-wrapper').addClass('trial-wrapper--visible');
}
function close_trial_modal() {
	$('.trial-wrapper').removeClass('trial-wrapper--visible');
}

$(document).ready(function() {
	$('.trial-close').on('click',function (e) {
		e.preventDefault();
		close_trial_modal();
	});
});
/***********************
Trial modal END
***********************/


/***********************
FAQ modal BEGIN
 ***********************/
function open_faq_modal() {
	$('.faq-modal').addClass('faq-modal--visible');
}
function close_faq_modal() {
	$('.faq-modal').removeClass('faq-modal--visible');
}

$(document).ready(function() {
	$('.faq-close').on('click',function (e) {
		e.preventDefault();
		close_faq_modal();
	});
});
/***********************
FAQ modal END
 ***********************/


/***********************
FAQ modal BEGIN
 ***********************/
function open_alert_modal() {
	$('.alert-modal').addClass('alert-modal--visible');
}
function close_alert_modal() {
	$('.alert-modal').removeClass('alert-modal--visible');
}

$(document).ready(function() {
	$('.alert-close').on('click',function (e) {
		e.preventDefault();
		close_alert_modal();
	});
});
/***********************
FAQ modal END
 ***********************/