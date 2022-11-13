import { users } from "./users.js"
const splitter = new RegExp("(\\n|\n)", "g")

const requiredProps = ["usr", "eme", "psw", "age", "loc", "fll"]
const usersArr = users.split("\n\n").map(user => user.replace(splitter, " "))
const usersProps = usersArr.map(user => {
  user = user.split(" ")
  const userObj = {}
  user.forEach(prop => {userObj[prop.substring(0,3)] = prop.substring(3)})
  return userObj
})

const validUsers = usersProps.filter(props => requiredProps.every(prop => prop in props))

console.log(validUsers.length)
