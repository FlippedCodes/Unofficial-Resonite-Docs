<languages></languages> <translate>

The **Find Child By Tag** node attempts to find a child slot of the
`Instance` input slot with a tag matching the input `Tag`.

## Usage

The `SearchDepth` input determines how many levels of the slot hierarchy
the node will search for child slots. 0 by default (i.e. searches only
the `Instance` slot's direct children).

The `FoundChild` is the first slot found whose tag exactly matches the
input `Tag`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct children (in
increasing index order) to deeper levels if allowed by the `SearchDepth`
input. A `SearchDepth` of 0 (default) searches only the `Instance` input
slot's direct children, a depth of 1 allows searching of the `Instance`
slot's children's children etc. A `SearchDepth` value of -1 allows
searching to unlimited depth.

Note: finding slots using this node is more demanding than simply
getting a child slot via its index using [Get Child (Protoflux
node)](Get_Child_(Protoflux_node) "wikilink"), so consider whether it is
absolutely required.

## Examples

## Node Menu

</translate>

[Find Child By Tag](Category:Protoflux{{#translation:}} "wikilink")
[Find Child By
Tag](Category:Protoflux:Slots{{#translation:}} "wikilink")