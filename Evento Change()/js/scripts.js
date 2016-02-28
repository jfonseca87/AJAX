$(function() {
	console.log('JQuery y el DOM estan listos!');

	$('#miBoton').click(function(evt) {
		console.log('Hiciste Click!');
	});

	$('#miSelect').change(function(evt) {
		var seleccion = $('#miSelect option:selected');
		$('#miSeleccion').html(seleccion.text());
	}).change();
})