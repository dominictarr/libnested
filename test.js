
var tape = require('tape')
var R = require('./')

tape('paths', function (t) {

  t.deepEqual(
    R.paths({foo: {bar: true}, baz: 2}),
    [
      ['foo', 'bar'],
      ['baz']
    ]
  )
  t.deepEqual(
    R.paths({}),
    []
  )

  var deep = {foo: {bar: true}, baz: 2, blurg: {fop: {hif: []}}}

  t.deepEqual(
    R.paths(deep),
    [
      ['foo', 'bar'],
      ['baz'],
      ['blurg', 'fop', 'hif']
    ]
  )

  var o = {}
  R.each(deep, function (v, path) {
    t.equal(R.get(deep, path), v)
    R.set(o, path, v)
  })

  t.deepEqual(o, deep)

  t.deepEqual(R.map(deep, function (v) { return v }), deep)

  t.end()

})
