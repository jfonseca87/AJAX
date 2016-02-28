$(function() {
	console.log('JQuery y el DOM estan listos!');

	$('#load').click(function(evt) {
		$('#loadContent').load('_load.html', function(e) {
			alert('Ya se cargo la pagina!')
		});
	});
})