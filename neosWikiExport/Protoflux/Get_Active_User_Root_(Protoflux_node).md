<languages></languages> <translate>

The **Get Active User Root** node node outputs the UserRoot for the user
whose root slot is a parent of the `Instance` input slot.

## Usage

The default output value is *null* if no active user is present. This
node only finds the closest active UserRoot to the `Instance` slot, i.e.
if the `Instance` slot is parented under user A, but user A is parented
under user B, the node will output user A's UserRoot.

For nodes which work with the UserRoot datatype see [User Root category
nodes](:Category:Protoflux:_User_Root "wikilink").

## Examples

## Node Menu

</translate>

[Get Active User Root](Category:Protoflux{{#translation:}} "wikilink")
[Get Active User
Root](Category:Protoflux:Slots{{#translation:}} "wikilink")