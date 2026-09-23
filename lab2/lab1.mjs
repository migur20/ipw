function filterProperties(propNames, obj) {
  const ret = {}
  for (const name of propNames) {
    if (typeof obj[name] != "undefined") {
      ret[name] = obj[name]
    }
  }
  return ret
}

function filterPropertiesN(propNames, objs) {
  const ret = []
  for (const obj of objs) {
    ret.push(filterProperties(propNames, obj))
  }
  return ret
}

export { filterProperties };
export { filterPropertiesN };
