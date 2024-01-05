<languages></languages> <translate>

The **Get Object Root** node attempts to find a parent of the input
`Instance` slot which has an [ObjectRoot
component](ObjectRoot_(Component) "wikilink").

## Usage

The upward hierarchy search starts with the input `Instance` slot, i.e.
if the input slot has an ObjectRoot component then the output will be
the same as the input. The search stops when it finds the closest
ObjectRoot to the `Instance` slot in its parent hierarchy. If no
ObjectRoot components are found, the output is the `Instance` slot.

## Examples

## Node Menu

</translate>

[Get Object Root](Category:Protoflux{{#translation:}} "wikilink") [Get
Object Root](Category:Protoflux:Slots{{#translation:}} "wikilink")