$(function () {
/*	$( 'tr:odd' ).addClass('odd');
	$( 'tr:even' ).addClass('even'); */
	$('th').parent().addClass('cabezote');
	$('tr:not([th]):even').addClass('even');
	$('tr:not([th]):odd').addClass('odd');
	$('td:contains("Tragedia")').addClass('destacado');
});
	