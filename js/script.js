$( document ).ready(function() {
	for (let i = 1; i <= 15; i++) {
		const cell = $(document.createElement(`div`)).addClass("cell border border-primary rounded").append(i);
		$('#field').append(cell);
	}
});