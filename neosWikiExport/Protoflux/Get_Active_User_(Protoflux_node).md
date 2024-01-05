<languages></languages> <translate>

The **Get Active User** node outputs the user whose root slot is a
parent of the `Instance` input slot.

## Usage

The default output value is *null* if no active user is present. This
node only finds the closest active user to the `Instance` slot, i.e. if
the `Instance` slot is parented under user A, but user A is parented
under user B, the node will output user A.

This node is generally useful for detecting which user is e.g. equipping
an avatar or grabbing an item since these result in the relevant object
being parented under a user's slot hierarchy.

## Examples

## Related Issues

[#2518 - Opening FBT Calibrator breaks any "Get Active User" nodes in
Protoflux on
avatars](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2518)

[#3475 - Add 'Get Active User' and 'Get Active User Self' to Users in
addition to Slots in Node
browser.](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3475)

## Node Menu

</translate>

[Get Active User](Category:Protoflux{{#translation:}} "wikilink") [Get
Active User](Category:Protoflux:Slots{{#translation:}} "wikilink")