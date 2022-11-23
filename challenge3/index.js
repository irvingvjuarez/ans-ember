import fs from "fs"

const colors = JSON.parse(fs.readFileSync("./colors.json"))
console.log(colors)