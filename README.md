# libnested

basic functions (map, each, get, set, keys) for nested objects.

## api

### each (object, iter(value, path)) => boolean

iterate over an object (depth first) and call `iter` with each value.
`path` is an array with one or more items, which is the path to value.
`value` will be any item which is not a `{}` object. Arrays are treated as values.

if `iter` returns false then each will stop traversing the object and return false also.

### map (object, iter(value, path) => nextValue, output) => output

map over a nested object (depth first). A new object is returned (unless `output` is given), containing values returned by `iter`.

### paths (object) => [path...]

return an array of paths into an object.

### get(object, path, default) => value

get the `value` at `path` within object.
if `path` does not exist in the `object`, return `default`.

### set(object, path, value)

set `value` at location `path` within `object`.
If path is deeper than object goes, intermediate `{}`'s are added. 


## License

MIT
