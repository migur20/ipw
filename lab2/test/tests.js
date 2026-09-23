import assert from "node:assert"
import { filterProperties } from "../lab1.mjs"

const student = {
  name: "Me",
  age: 20,
  number: 52573,
  address: "foo bar baz",
}

const nameAndAge = [
  "name",
  "age",
]
const numAndAddr = [
  "number",
  "address",
]

const nameAndAddr = [
  "name",
  "address",
]

function assertObjProps(original, result) {
  for (let prop in result) {
    assert.equal(original[prop], result[prop])
  }
}

function assertFilteredOutProps(original, obj, filter) {
  const filteredOut = Object.keys(original).filter(p => !filter.includes(p))
  for (let p of filteredOut) {
    assert.equal(obj[p], undefined)
  }
}

it("Sould return an object with only the requested properties with correct values", function () {
  const results = [
    { res: filterProperties(nameAndAddr, student), filter: nameAndAddr },
    { res: filterProperties(nameAndAge, student), filter: nameAndAge },
    { res: filterProperties(numAndAddr, student), filter: numAndAddr },
    { res: filterProperties(["name"], student), filter: ["name"] },
    { res: filterProperties(["age"], student), filter: ["age"] },
    { res: filterProperties(["number"], student), filter: ["number"] },
    { res: filterProperties(["address"], student), filter: ["address"] },
    { res: filterProperties(Object.keys(student), student), filter: Object.keys(student) },
  ]
  for (let r of results) {
    //Checks that every property is in result and with the correct value
    assertObjProps(student, r.res)
    //Checks that properties that were filtered out are indeed undefined
    assertFilteredOutProps(student, r.res, r.filter)
  }
})

////returns true if objs1 propertie number and names are equal to obj2
//function checkProperties(obj1, obj2) {
//  // Source - https://stackoverflow.com/a/4889658
//  // Posted by Avi Flax, modified by community. See post 'Timeline' for change history
//  // Retrieved 2026-09-22, License - CC BY-SA 4.0
//  if (Object.keys(obj1).length != Object.keys(obj2).length)
//    return false
//  for (let p1 in obj1) {
//    if (obj2[p1] == "undefined")
//      return false
//  }
//  return true;
//}
