const oldLog = console.log
console.log = function (...data) {
  oldLog(Date(), " - ", ...data)
}

const a = [{ x: "Hello" }, { x: "world" }]
//console.log(a)

function showProperties(obj) {
  for (let p in obj) {
    console.log(p + ": " + typeof obj[p])
  }
}

let o = { a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 } }

//showProperties(o)

function executeFunctions(funcs) {
  for (let func of funcs) {
    if (typeof func == "function")
      func()
  }
}

function sayHi() {
  console.log('Hi')
}

function sayBye() {
  console.log('Bye')
}

//executeFunctions([sayHi, "Oops", , sayBye])

function filterProduct(products, minPrice) {
  //return products.filter(p => p.price >= minPrice)
  //let i = 0
  let ret = []
  for (let p of products) {
    if (typeof p["price"] == "number") {
      if (p.price > minPrice)
        ret.push(p)
      //ret[i++] = p
    }
  }
  return ret
}

const products = [
  { name: 'Apple', price: 5 },
  { name: 'Orange', price: 10 },
  { name: 'Banana', price: 3 }
]

const expensive = filterProduct(products, 4)
//console.log(expensive)

function mapProduct(products) {
  //return products.map(p => p.name)
  let names = []
  for (let elem of products) {
    if (typeof elem["name"] == "string")
      names[names.length] = elem.name
    //names.push(elem.name)
  }
  return names
}

const names = mapProduct(products)
//console.log(names)

function reduceProduct(products) {
  return products.reduce((acc, curr) => acc + curr.price, 0)
  // let total = 0
  // for (let p of products) {
  //   total += p.price
  // }
  // return total
}
const total = reduceProduct(products)
//console.log(total)

function filter(array, predicate) {
  let ret = []
  for (let elem of array) {
    if (predicate(elem))
      ret.push(elem)
  }
  return ret
}

let numbers = [1, 2, 3, 4, 5]

const even = filter(numbers, n => n % 2 === 0)
//console.log(even)

function map(array, transformation) {
  let ret = []
  for (let elem of array) {
    ret.push(transformation(elem))
  }
  return ret
}
numbers = [1, 2, 3]

const doubled = map(numbers, n => n * 2)
//console.log(doubled)

function reduce(array, operation, initialValue) {
  let ret = initialValue
  for (let elem of array) {
    ret = operation(ret, elem)
  }
  return ret
}
console.log("Hello")
const sum = reduce(numbers, (acc, n) => acc + n, 0)
//console.log(sum)

function filterProperties(propNames, obj) {
  const ret = {}
  for (const name of propNames) {
    if (typeof obj[name] != "undefined") {
      ret[name] = obj[name]
    }
  }
  return ret
}

o = { a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America' }

const props = ['b', 'd', 'g', 'a']
const oFiltered = filterProperties(props, o)
//console.log(oFiltered)

function filterPropertiesN(propNames, objs) {
  const ret = []
  for (const obj of objs) {
    ret.push(filterProperties(propNames, obj))
  }
  return ret
}

const objs = [
  { a: 1, b: 'Thor', c: [1, 2, 3], d: { x: 10 }, e: 2, f: 'Captain America' },
  { b: 'Hulk', a: [1, 2, 3], d: { x: 10 }, e: 2, g: false },
  { x: 'Vision', y: false }
]

const objsFiltered = filterPropertiesN(props, objs)
//console.log(objsFiltered)

//console.log("Hello World")
