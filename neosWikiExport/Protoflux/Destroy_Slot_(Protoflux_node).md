<languages></languages> <translate>

The **Destroy Slot** node deletes the `Instance` input slot (and all
child slots) when an impulse is received at `DoDestroy`.

## Usage

The `PreserveAssets` input determines whether any assets (audio, meshes,
images etc.) saved under the `Instance` or child slots will be kept when
the deletion occurs. If True, any assets in use by other parts of the
world hierarchy will be moved to a child slot under the world's Assets
slot. False by default.

The `SendDestroyingEvent` determines whether any [On
Destroying](On_Destroying_(Protoflux_node) "wikilink") nodes under the
`Instance` slot's hierarchy will be triggered before slots are deleted.
True by default.

The `OnDone` output fires an impulse when the `Instance` slot has been
successfully destroyed after an impulse was received at `DoDestroy`. No
impulse is fired if there is no valid `Instance` input.

## Examples

This node can be used to respawn users if their user root slot is
destroyed.

## Node Menu

</translate>

[Destroy Slot](Category:Protoflux{{#translation:}} "wikilink") [Destroy
Slot](Category:Protoflux:Slots{{#translation:}} "wikilink")