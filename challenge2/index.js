import fs from "fs";
import path from "path"

const encryptedTextPath = path.resolve("encrypted.txt")
const messageBuffer = fs.readFileSync(encryptedTextPath)
const messageTextContent = messageBuffer.toString()
console.log({
    messageTextContent
})