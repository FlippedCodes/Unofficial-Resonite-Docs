<languages></languages> <translate>

The **Find Parent By Tag** node attempts to find a parent slot of the
`Instance` input slot with a tag matching the input `Tag`.

## Usage

The `FoundParent` is the first slot found whose tag exactly matches the
input `Tag`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct parent to
higher levels if allowed by the `SearchDepth` input. A `SearchDepth` of
0 (default) searches only the `Instance` input slot's direct parent, a
depth of 1 allows searching of the `Instance` slot's parent's parent
etc. A `SearchDepth` value of -1 allows searching to unlimited depth.

## Examples

## Node Menu

</translate>

[Find Parent By Tag](Category:Protoflux{{#translation:}} "wikilink")
[Find Parent By
Tag](Category:Protoflux:Slots{{#translation:}} "wikilink")