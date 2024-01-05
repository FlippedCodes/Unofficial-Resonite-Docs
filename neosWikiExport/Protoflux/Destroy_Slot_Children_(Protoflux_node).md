<languages></languages> <translate>

The **Destroy Slot Children** node deletes all child slots of the
`Instance` input slot when an impulse is received at `DoDestroy`.

## Usage

The `PreserveAssets` input determines whether any assets (audio, meshes,
images etc.) saved under the destroyed slots will be kept when the
deletion occurs. If True, any assets in use by other parts of the world
hierarchy will be moved to a child slot under the world's Assets slot.
False by default.

The `OnDone` output fires an impulse when the `Instance` slot's children
have been successfully destroyed after an impulse was received at
`DoDestroy`. No impulse is be fired if there is no valid `Instance`
input, however an impulse is still fired if a valid `Instance` slot has
no children.

## Examples

## Node Menu

</translate>

[Destroy Slot Children](Category:Protoflux{{#translation:}} "wikilink")
[Destroy Slot
Children](Category:Protoflux:Slots{{#translation:}} "wikilink")