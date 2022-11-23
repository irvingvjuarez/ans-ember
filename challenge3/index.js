import fs from "fs"

const sequences = []
let firstColor = "", secondColor = "", sequenceCount = 0, currentSequence = []
const colors = JSON.parse(fs.readFileSync("./colors.json"))

function resetValues(color) {
	// console.log({
	// 	firstColor,
	// 	secondColor,
	// 	sequenceCount,
	// 	currentSequence
	// })

	firstColor = color,
	secondColor = ""
	sequenceCount = 1

	sequences.push(currentSequence)
	currentSequence = [firstColor]
}

function updateValues(color) {
	currentSequence.push(color)
	sequenceCount ++
}

for(let color of colors) {
	if (sequenceCount === 0) {
		firstColor = color;
		updateValues(color)
	} else if (color !== firstColor && sequenceCount === 1) {
		secondColor = color
		updateValues(color)
	} else if (sequenceCount > 1) {
		const isInFirstColor = sequenceCount % 2 === 0;

		if (isInFirstColor && color !== firstColor) {
			resetValues(color)
			// break;
		} else if (!isInFirstColor && color !== secondColor) {
			resetValues(color)
			// break;
		} else {
			updateValues(color)
		}
	}
}

console.log(sequences)