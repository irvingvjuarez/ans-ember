import fs from "fs"
import { getSurvivor } from "./getSurvivor.js"

let patrons = JSON.parse(fs.readFileSync("./mecenas.json")).map((patron, index) => ({
	patron, index
}))

let technologies = [
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

patrons = getSurvivor(patrons)

console.log(patrons)