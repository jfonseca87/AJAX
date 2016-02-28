$(function() {
	console.log('JQuery y el DOM estan listos!');

	$('#miBoton').click(function(evt) {
		console.log('Hiciste Click!');
	});

	$('#miSelect').change(function(evt) {
		var seleccion = $('#miSelect option:selected');
		$('#miSeleccion').html(seleccion.text());
	}).change();

	$('#miLista').hover(function(evt) {
		$(this).toggleClass('hover');
	});

	$('#multipleEvento').on('click mouseenter mouseleave', function(evt) {
		console.log('Evento Disparado!');
	});

	$('#agregarElemento').click(function(evt) {
		$('#listaDinamica').append('<li> XXX </li>')
	});
})