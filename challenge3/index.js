import fs from "fs"

let firstColor = "", secondColor = "", sequenceCount = 0
const colors = JSON.parse(fs.readFileSync("./colors.json"))

function printValues() {
	console.log({
		firstColor,
		secondColor,
		sequenceCount
	})
}

for(let color of colors) {
	if (sequenceCount === 0) {
		firstColor = color;
		sequenceCount ++
	} else if (color !== firstColor && sequenceCount === 1) {
		secondColor = color
		sequenceCount ++
	} else if (sequenceCount > 1) {
		const isInFirstColor = sequenceCount % 2 === 0;

		if (isInFirstColor && color !== firstColor) {
			printValues()
			sequenceCount = 0
			break;
		} else if (!isInFirstColor && color !== secondColor) {
			printValues()
			sequenceCount = 0
			break;
		} else {
			sequenceCount ++
		}
	}
}