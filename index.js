function isObject (o) {
  return o && 'object' === typeof o && !Array.isArray(o)
}

function get (obj, path, dft) {
  for(var i = 0; i < path.length; i++) {
    if(null == (obj = obj[path[i]])) return dft
  }
  return obj
}

function set (obj, path, value) {
  if(!obj) throw new Error('libnested.set: first arg must be an object')
  for(var i = 0; i < path.length; i++)
    if(i === path.length - 1)
      obj[path[i]] = value
    else if(null == obj[path[i]])
      obj = (obj[path[i]] = {})
    else
      obj = obj[path[i]]
  return value
}

function each (obj, iter, path) {
  path = path || []
  for(var k in obj) {
    if(isObject(obj[k])) {
      if(false === each(obj[k], iter, path.concat(k))) return false
    } else {
      if(false === iter(obj[k], path.concat(k))) return false
    }
  }
  return true
}

function map (obj, iter, out) {
  var out = out || {}
  each(obj, function (val, path) {
    set(out, path, iter(val, path))
  })
  return out
}

function paths (obj) {
  var out = []
  each(obj, function (_, path) {
    out.push(path)
  })
  return out
}

exports.get = get
exports.set = set
exports.each = each
exports.map = map
exports.paths = paths
