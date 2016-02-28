$(document).ready(function () {

	$("#Enviar").click(function () {
		var data = $("#form1").serialize();
		alert(data);		
	});
});