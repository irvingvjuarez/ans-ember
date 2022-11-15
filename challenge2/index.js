import fs from "fs";
import path from "path"

const encryptedTextPath = path.resolve("encrypted.txt")
const messageBuffer = fs.readFileSync(encryptedTextPath)
const messageTextContent = messageBuffer.toString()

const decodedMessage = messageTextContent.split(" ")
	.map(word => {
		word = word.split("")
		const asciiWord = []
		let asciiCode

		while(word.length > 0) {
			asciiCode = word.splice(0, 2).join("")
			const isValid = asciiCode >= 97 && asciiCode <= 122

			if (!isValid) {
				const missingNumber = word.splice(0, 1).join("")
				asciiCode += missingNumber
			}

			asciiWord.push(asciiCode)
		}

		const decodedWord = asciiWord.map(letterCode => String.fromCharCode(letterCode)).join("")

		return decodedWord
	})

console.log({
	decodedMessage
})
