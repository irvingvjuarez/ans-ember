import { users } from "./users.js"
const splitter = new RegExp("(\\n|\n)", "g")

const required = ["usr", "eme", "psw", "age", "loc", "fll"]
const usersArr = users.split("\n\n").map(user => user.replace(splitter, " "))

console.log(usersArr)
