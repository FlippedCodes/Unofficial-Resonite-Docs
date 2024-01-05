<languages></languages> <translate>

The **Undoable Destroy** node destroys the `Target` slot and creates an
Undo Manager entry when an impulse is received at `Create`.

## Usage

The `PreserveAssets` input determines whether assets held under the
destroyed hierarchy which are in use by other slots in the world will be
preserved under a new slot under the world Assets slot.

The `OnCreated` output fires an impulse when the Undo Manager entry has
been successfully created and the `Target` destroyed. No impulse will be
fired if there is no valid `Target` set.

The Undo Manager entry is created for the owner of the impulse received
at `Create`. This allows that user to undo the destruction of the
`Target` via their radial context menu.

## Examples

## Node Menu

</translate>

[Undoable Destroy](Category:Protoflux{{#translation:}} "wikilink")
[Undoable Destroy](Category:Protoflux:Undo{{#translation:}} "wikilink")