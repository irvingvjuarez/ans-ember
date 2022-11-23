const validPasswords = []

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

	return inRange
}

for(let i = 11098; i <= 98123; i++) {
	const isValueValid = isValidPassword(i)
	if(isValueValid) validPasswords.push(i)
}

console.log(validPasswords)