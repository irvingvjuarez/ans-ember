import fs from "fs"

const patrons = JSON.parse(fs.readFileSync("./mecenas.json")).map((patron, index) => ({
	patron, index
}))

const technologies = [
	{index: 0},
	{index: 1},
	{index: 2},
	{index: 3},
	{index: 4},
	{index: 5},
	{index: 6},
	{index: 7},
	{index: 8},
	{index: 9}
]

let currentIndex = 0
while(technologies.length > 1){
	const nextIndex = currentIndex + 1;
	const rightSidePatron = technologies[nextIndex]

	if (rightSidePatron) {
		technologies.splice(nextIndex, 1)
		currentIndex += 1
	} else {
		const isAtTheEdge = currentIndex === technologies.length - 1
		if (isAtTheEdge) {
			currentIndex = - 1
		} else {
			currentIndex = 0
		}
	}
}

console.log(technologies)