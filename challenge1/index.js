import { data } from "./users.js"
const splitter = new RegExp("(\\n|\n)", "g")
const requiredProps = ["usr", "eme", "psw", "age", "loc", "fll"]

const users = data.split("\n\n")
  .map(user => user.replace(splitter, " "))
  .map(user => {
    const userObj = {}
    user = user.split(" ")
    user.forEach(prop => {userObj[prop.substring(0,3)] = prop.substring(3)})
    return userObj
  })

const validUsers = users.filter(props => requiredProps.every(prop => prop in props))

const size = validUsers.length
const finalValidUser = validUsers[size - 1].usr
const finalAnswer = `submit ${size}${finalValidUser}`

console.log(finalAnswer)
