$('#talk').on('click', function(e) {
	e.preventDefault();
	$('#showFirst').addClass('notShow');
	$('#talk').addClass('notShow');
	$('#notShowFirst').removeClass('notShow');
	$('#close').removeClass('notShow');
	$('#form').removeClass('notShow');
	$('#form').addClass('flex');
});
$('#close').on('click', function(e) {
	e.preventDefault();
	$('#showFirst').removeClass('notShow');
	$('#talk').removeClass('notShow');
	$('#notShowFirst').addClass('notShow');
	$('#close').addClass('notShow');
	$('#form').addClass('notShow');
	$('#form').removeClass('flex');
});
