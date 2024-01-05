<languages></languages> <translate>

The **Cache** node can be used for performance optimization. If you have
a complex or heavy calculation with result that's read by multiple other
nodes, you can place this node at the end. This will make sure that the
input is evaluated only once (per evaluation context) and the result
reused for the other nodes. In most cases you don't need it and it
doesn't change the functionality in any way. At some point in the future
this is going to be handled automatically.

## Usage

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink")
[Category:Generics{{#translation:}}](Category:Generics{{#translation:}} "wikilink")
[Cache](Category:Protoflux{{#translation:}} "wikilink")