<languages></languages> <translate>

The **Set Parent** node reparents the `Instance` input slot under the
`NewParent` input slot.

As usual, precautions related to the duplication and reparenting of
dynamic variables apply, as described on the [Dynamic
Variables](Dynamic_Variables "wikilink") page.

## Usage

The `NewParent` input defaults to the world root slot.

The `PreserveGlobalPosition` input determines whether the `Instance`
slot's [global position](Coordinate_spaces#Global_vs._Local "wikilink")
will be kept constant during the reparenting event. If False, the
`Instance` slot's local position is preserved instead. Defaults to True.

The `OnDone` output fires an impulse after any reparenting has been
successfully performed. This happens regardless of whether the parent of
the `Instance` slot was actually changed. No impulse is fired if there
is no valid `Instance` input.

If the `Instance` has a non-zero OrderOffset value, this is maintained
during reparenting. Otherwise the slot's index after reparenting is 1
greater than the highest index among children of the `NewParent` slot
before reparenting, i.e. it is added at the bottom of the list in the
slot inspector.

## Examples

## Node Menu

</translate>

[Set Parent](Category:Protoflux{{#translation:}} "wikilink") [Set
Parent](Category:Protoflux:Slots{{#translation:}} "wikilink")