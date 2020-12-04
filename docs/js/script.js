$( document ).ready(function() {
	const cellSize = 100;
	const empty = {
		top: 0,
		left: 0
	};

	const cells = [];
	cells.push(empty);

	function move(index) {
		const cell = cells[index];
		const leftDiff = Math.abs(empty.left - cell.left);
		const topDiff = Math.abs(empty.top - cell.top);
		if (leftDiff + topDiff > 1) {
			return;
		};

		$(cell.element).css('left', empty.left*cellSize).css('top', empty.top*cellSize);
		const emptyLeft = empty.left;
		const emptyTop = empty.top;
		empty.left = cell.left;
		empty.top = cell.top;
		cell.left = emptyLeft;
		cell.top = emptyTop;
	};

	const numbers = [...Array(15).keys()].sort(()=>Math.random()-0.5);

	for (let i = 1; i <= 15; i++) {
		const left = (i % 4);
		const top = ((i - left) / 4);
		const cell = $(document.createElement('div')).addClass("cell border border-primary rounded position-absolute text-center");
		$(cell).append(numbers[i-1]+1);
		
		cells.push({
			left: left,
			top: top,
			element: cell
		});

		$(cell).css("left", left*cellSize).css("top", top*cellSize);

		$('#field').append(cell);

		$(cell).bind('click', function(){
			move(i);
		});
	};
});