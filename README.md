# libnested

basic functions (map, each, get, set, keys) for nested objects.

## api

### each (object, iter(value, path), includeArrays?) => boolean

iterate over an object (depth first) and call `iter` with each value.
`path` is an array with one or more items, which is the path to value.
`value` will be any item which is not a `{}` object. Arrays are treated as values.

if `iter` returns false then each will stop traversing the object and return false also.

if `includeArrays` is true (defaults to false) then arrays
encounted will be treated like objects. If `includeArrays`
is not true, arrays will be treated like `values`.

### map (object, iter(value, path) => nextValue, output, includeArrays?) => output

map over a nested object (depth first). A new object is returned (unless `output` is given), containing values returned by `iter`.

if `includeArrays` is true, the contents of arrays will be mapped,
otherwise only the arrays themselves will be.

### paths (object) => [path...]

return an array of paths into an object.

### get(object, path, default) => value

get the `value` at `path` within object.
if `path` does not exist in the `object`, return `default`.

`path` may be an array of strings or numbers, or a single string or number.

### set(object, path, value)

set `value` at location `path` within `object`.
If path is deeper than object goes, intermediate `{}`'s are added.

`path` may be an array of strings or numbers, or a single string or number.

`object` will be mutated.

### clone (object)

return a new object with the same structure and primitive values as `object`

cyclic objects are not supported - will produce a `RangeError` (stackoverflow)

## License

MIT

