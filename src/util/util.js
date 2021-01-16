export function reviseParam (necessary, query) {
  let params = arguments[0]
  let querys = arguments[1]
  let arr = [];
  let str = ''
  for (var i in params) {
    arr.push(params[i])
  }
  str = arr.join('/')
  return {
    str,
    querys
  }
}


