import { getValidPasswords } from "./utils/getValidPasswords.js";

const validPasswords = getValidPasswords()

const validPasswordsSize = validPasswords.length;
const fiftyFiveValue = validPasswords[55]

console.log({
	validPasswordsSize,
	fiftyFiveValue
})