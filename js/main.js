/***********************
Fixed tableheader BEGIN
***********************/
$(document).ready(function() {
	$(window).on('scroll',function () {
		var header_height = $('.l-header').outerHeight();
		var scrolltop = $(this).scrollTop();
		if(scrolltop > header_height){
			$('.maintable-header__table').addClass('fixed');
		} else {
			$('.maintable-header__table').removeClass('fixed');
		}
	})
});
/***********************
Fixed tableheader END
***********************/

/***********************
Table sizes BEGIN
***********************/
$(document).ready(function() {
	columns_sizes();
});

$(window).on('resize',function () {
	columns_sizes();
});

function columns_sizes() {
	for (var i = 1; i < 22; i++) {
		$('.maintable-header .col-'+i).width($('.maintable .col-'+i).width());
	}
}
/***********************
Table sizes END
***********************/


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