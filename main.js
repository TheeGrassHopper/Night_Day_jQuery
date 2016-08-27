$(document).ready(function(){
	$('#orb').click(function(){
		if ($(this).hasClass('sun')) {
			$(this).removeClass('sun').addClass('moon');
		} else {
			$(this).removeClass('moon').addClass('sun');
		}

		if ($('#sky').hasClass('day')){
			$('#sky').removeClass('day').addClass('night');
		} else {
			$('#sky').removeClass('night').addClass('day');
		}

		// First spot on the moon 
		if( $('.moonspots1').hasClass('visible')){
			$('.moonspots1').removeClass('visible');
		} else{
			$('.moonspots1').addClass('visible');
		}

		// second spot on the moon
		if( $('.moonspots2').hasClass('visible')){
			$('.moonspots2').removeClass('visible');
		} else{
			$('.moonspots2').addClass('visible');
		}

		// 3rd spot on the moon
		if( $('.moonspots3').hasClass('visible')){
			$('.moonspots3').removeClass('visible');
		} else{
			$('.moonspots3').addClass('visible');
		}
	});
});