document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
	apparaat = device.name;
	apparaat = apparaat.replace(' ', '').toLowerCase();
	$("body").addClass(apparaat);
}


$(document).ready(function(){
	var start = false;
	var eva = true;
	
	$('#topbar').width($( window ).width());
	
	$('#slide1, #slide2, #slide3, .eva').width($( window ).width());
	$('#slide1, #slide2, #slide3, .eva').height($( window ).height() - $("#optbar").height());
	$('#slide2, #slide3').hide();
	
	$('.eva').width( $( window ).width() * 2);
	
	
	$('.view').on('touchend', function(){
		
		if($(this).data('tap') == 'popup' && eva){
			
			$("#slide2").fadeIn(500);
			
		} else if($(this).data('tap') == 'forward'){
			
			if(start == false){
				$('#slide3').show();
				$(".eva").animate({
					'margin-left': '-='+$( window ).width()
				});
				$("#topbar").addClass('product');
			
				$("#topbar p").hide();
				start = true;
				eva = false;
			} else {
				$("#slide2, #slide3").fadeOut(200, function(){
					eva = true;
					start = false;
				});
				
			}	
			
		} else if($(this).data('tap') == 'back'){
			
			$(".eva").animate({
				'margin-left': '+='+$( window ).width()
			});
			$('#slide3').show();
			$("#topbar").removeClass('product');
			$("#topbar p").show();
			
		}  
	});
	
	$('#topbar').on('touchend', function(){
		if($(this).hasClass('product')){
			$(".eva").animate({
				'margin-left': '+='+$( window ).width()
			});
			$('#slide3').show();
			$("#topbar").removeClass('product');
			$("#topbar p").show();
			
		}
	});
	
	
	
	
});

