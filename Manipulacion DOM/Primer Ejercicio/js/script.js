/*$(document).ready(function() {
	$('div.capitulo a').attr({'rel':'external'});
});*/

$(document).ready(function() {
	$('div.capitulo a').each(function(index) {
		var thisLink = $(this);
		thisLink.attr({
			'rel':'external',
			'id': 'enlacewiki-' + index,
			'title':'Aprende mas sobre ' + thisLink.text() + ' en la Wikipedia'
		});
	});
});

$(document).ready(function() {
	$('<a href="#arriba"> Volver arriba </a>').insertAfter('div.capitulo p:gt(6)');
	$('<a id="arriba"></a>').prependTo('body');
});

$(document).ready(function() {
	$('<ol id="notas"></ol>').insertAfter('div.capitulo');
	$('span.notapie').each(function(index) {
		$(this).before('<a href="#nota-pie-'+ (index + 1) +'" id="contexto-'+ (index + 1) +'"><sup>'+ (index + 1) + '</sup></a>')
		.appendTo('#notas')
		.append('&nbsp;(<a href="#contexto-' + (index + 1) + '"> contexto </a>)')
		.wrap('<li id="nota-pie-'+ (index + 1) + '"></li>');
	});
});