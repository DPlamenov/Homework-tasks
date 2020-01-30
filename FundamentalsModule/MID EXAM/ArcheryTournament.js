function solve(input) {
	let targets = input.shift().split('|').map(Number);
	let commands = input.slice();
	let points = 0;
	commands.forEach(function (element) {
		if (element.includes('Shoot Left')) {
			let startIndex = element.split('@')[1];
			let endIndex = element.split('@')[2];
			let target;
			if (startIndex >= endIndex) {
				target = startIndex - endIndex;
			} else {
				target = Math.abs(startIndex - endIndex) + 1;
			}

			if (startIndex >= 0 && startIndex < targets.length) {
				while (target > targets.length) {
					target -= targets.length;
				}
				if (targets[target] < 5) {
					points += targets[target];
					targets[target] = 0;
				} else {
					targets[target] -= 5;
					points += 5;
				}
			}
		} else if (element.includes('Shoot Right')) {
			let startIndex = Number(element.split('@')[1]);
			let endIndex = Number(element.split('@')[2]);
			let target =
				startIndex + endIndex;
			if (startIndex >= 0 && startIndex < targets.length) {
				while (target > targets.length) {
					target -= targets.length;
				}
				if (targets[target] < 5) {
					points += targets[target];
					targets[target] = 0;
				} else {
					targets[target] -= 5;
					points += 5;
				}
			}
		} else if (element.includes('Reverse')) {
			targets = targets.reverse();
		}
	});
	console.log(targets.join(' - '));
	console.log(`Iskren finished the archery tournament with ${points} points!`);
}