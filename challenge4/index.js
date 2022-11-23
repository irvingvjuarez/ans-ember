const testingArr = [55678, 12555, 55555, 12345, 57775]

function isValidPassword(number) {
	let leftNumber = 0

	const numberArr = number.toString().split("")
	const rightGreaterThanLeft = numberArr.every(num => {
		const isGreaterThanOrEqual = num >= leftNumber
		leftNumber = num

		return isGreaterThanOrEqual
	})

	const filterByFive = numberArr.filter(char => char === "5")
	const atLeastTwoFives = filterByFive.length >= 2

	const inRange = rightGreaterThanLeft && atLeastTwoFives

	console.log({
		number,
		inRange
	})
}

testingArr.forEach(value => isValidPassword(value))