<languages></languages> <translate>

The **Multiplex** node outputs one of the multiple `Operands` input
values determined by the `Index` input.

## Usage

The index corresponding to each input is visible in square brackets in
the respective input name.

The `InputCount` output provides the current number of inputs.

This node initially had an unset dummy datatype when spawned from the
node browser. It will overload to the correct datatype when any value or
reference typed value is connected. If the `Index` value is out of
range, i.e. it is less than 0 or greater than `InputCount` -1, the
output will either be the type default value (for value types) or *null*
for reference types.

## Examples

## Node Menu

</translate>

[Multiplex](Category:Protoflux{{#translation:}} "wikilink")