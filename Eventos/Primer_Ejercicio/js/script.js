$(document).ready(function() {
	$('#alternador-normal').bind('click', function() {
		$('#capitulo-prefacio').removeClass('largo');
		$('#capitulo-prefacio').removeClass('estrecho');
		$('#alternador .boton').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#alternador-estrecho').bind('click', function() {
		$('#capitulo-prefacio').addClass('estrecho');
		$('#capitulo-prefacio').removeClass('largo');
		$('#alternador .boton').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#alternador-largo').bind('click', function() {
		$('#capitulo-prefacio').addClass('largo');
		$('#capitulo-prefacio').removeClass('estrecho');
		$('#alternador .boton').removeClass('selected');
		$(this).addClass('selected');
	});
});

$(document).ready(function() {
	$('#alternador h3').click(function() {
		$('#alternador .boton').toggleClass('ocultar');
	});
});

$(document).ready(function() {
	$('#alternador .boton').hover( 
		function() {
			$(this).addClass('hover');
		}, 
		function() {
			$(this).removeClass('hover');
		}
	);
});
