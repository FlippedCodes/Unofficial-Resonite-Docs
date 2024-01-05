<languages></languages> <translate>

The **Find Parent By Name** node attempts to find a slot which is a
parent of the `Instance` input slot which has a name matching the input
`Name`.

## Usage

The `MatchSubstring` input determines whether slots whose names contain
the input `Name` will be considered valid matches. True by default.

The `SearchDepth` input determines how many levels of the slot hierarchy
the node will search for parent slots. 0 by default (i.e. searches only
the `Instance` slot's direct parent).

The `IgnoreCase` input determines whether slot names which do not
exactly match the upper/lower case of the `Name` input will be
considered valid. True by default.

The `FoundParent` output is the first slot found whose name matches the
input `Name`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct parent to
higher levels if allowed by the `SearchDepth` input. A `SearchDepth` of
0 (default) searches only the `Instance` input slot's direct parent, a
depth of 1 allows searching of the `Instance` slot's parent's parent
etc. A `SearchDepth` value of -1 allows searching to unlimited depth.

## Examples

## Node Menu

</translate>

[Find Parent By Name](Category:Protoflux{{#translation:}} "wikilink")
[Find Parent By
Name](Category:Protoflux:Slots{{#translation:}} "wikilink")