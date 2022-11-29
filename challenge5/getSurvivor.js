let currentIndex = 0

export const getSurvivor = (arr) => {
	while(arr.length > 1){
		const nextIndex = currentIndex + 1;
		const rightSidePatron = arr[nextIndex]

		if (rightSidePatron) {
			arr.splice(nextIndex, 1)
			currentIndex += 1
		} else {
			const isAtTheEdge = currentIndex === arr.length - 1
			if (isAtTheEdge) {
				currentIndex = - 1
			} else {
				currentIndex = 0
			}
		}
	}

	return arr
}