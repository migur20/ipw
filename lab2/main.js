import { filterProperties, filterPropertiesN } from "../lab1.js"

const props = ['b', 'd', 'g', 'a']

const objs = [
  { a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America' },
  { b: 'Hulk', a: [1, 2, 3], d: { x: 10 }, e: 2, g: false },
  { x: 'Vision', y: false }
]

const o = { a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America' }

console.log(filterProperties(props, o))
console.log(filterPropertiesN(props, objs))
