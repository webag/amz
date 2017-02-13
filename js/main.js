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