$( document ).ready(function() {
	const cellSize = 100;
	const empty = {
		top: 0,
		left: 0
	};

	for (let i = 1; i <= 15; i++) {
		const left = (i % 4);
		const top = ((i - left) / 4);
		const cell = $(document.createElement('div')).addClass("cell border border-primary rounded position-absolute").append(i).css("left", left*cellSize).css("top", top*cellSize);

		$('#field').append(cell);
	}
});