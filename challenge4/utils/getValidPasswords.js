import { isValidPassword } from "./isValidPassword.js"

export function getValidPasswords() {
	const validPasswords = []

	for(let i = 11098; i <= 98123; i++) {
		const isValueValid = isValidPassword(i)
		if(isValueValid) validPasswords.push(i)
	}

	return validPasswords
}