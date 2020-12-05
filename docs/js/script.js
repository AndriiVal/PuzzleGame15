$( document ).ready(function() {
	const cellSize = 100;
	const empty = {
		value: 0,
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

		const isFinished = cells.every(cell => {
			return cell.value -1 === cell.top * 4 + cell.left;
		});
		if (isFinished) {
			alert('You won!');
		};
	};

	const numbers = [...Array(15).keys()].sort(()=>Math.random()-0.5);

	for (let i = 1; i <= 15; i++) {
		const value = numbers[i-1]+1;
		const left = (i % 4);
		const top = ((i - left) / 4);
		const cell = $(document.createElement('div')).addClass("cell jumbotron p-2 border border-primary rounded position-absolute text-center");
		$(cell).append(value);
		
		cells.push({
			value: value,
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