//Efecto hover sobre los botones 
$(document).ready(function() {
	$('div.boton, span.mas, span.ocultar, p:eq(2)').hover(
		function() {
			$(this).addClass('hover');
		}, 
		function() {
			$(this).removeClass('hover');
		}
	);
});

//Aumentar o dismunir la fuente de los parrafos
$(document).ready(function() {
	$('div.boton').click(function() {
		var discurso = $('div.discurso');
		var currentSize = discurso.css('fontSize');
		var num = parseFloat(currentSize, 10);
		var unidad = currentSize.slice(-2);
		if (this.id == 'aumenta') {
			num *= 1.4;
		}else {
			num /= 1.4;
		}
		discurso.css('fontSize', num + unidad);
	});
});

//efecto ocultar mostras parrafos
$(document).ready(function() {
	$('p:eq(1), span.ocultar').hide();
	$('span.mas').click(function() {
		$('p:eq(1), span.ocultar').slideDown('slow');
		$(this).hide();
	});

	$('span.ocultar').click(function() {
		$('p:eq(1), span.ocultar').slideUp('slow');
		$(this).hide();
		$('span.mas').fadeIn('slow');
	});
	
});

/*$(document).ready(function() {
	$('div.etiqueta').click(function() {
		$('div.boton')
		.animate({left:1200}, 'slow')
		.animate({height:38}, 'slow');
	});
});*/

$(document).ready(function() {
	$('div.etiqueta').click(function() {
		$('div.boton')
		.fadeTo('slow', 0.5)
		.animate({left:1200}, 'slow')
		.fadeTo('slow', 1.0)
		.slideUp('slow')
		.slideDown('slow', function() {
			$(this).css('backgroundColor', '#f00');
		});
	});
});

/*$(document).ready(function() {
	$('p:eq(3)').css('backgroundColor', '#fcf').hide();
	$('p:eq(2)').css('backgroundColor', '#cff').click(function() {
		$(this).slideUp('slow').next().slideDown('slow');
	});
});*/

$(document).ready(function() {
	$('p:eq(3)').css('backgroundColor', '#fcf').hide();
	$('p:eq(2)').css('backgroundColor', '#cff').click(function() {
		var thisPara = $(this);
		thisPara.next().slideDown('slow', function() {
			thisPara.slideUp('slow');
		});
	});
});
