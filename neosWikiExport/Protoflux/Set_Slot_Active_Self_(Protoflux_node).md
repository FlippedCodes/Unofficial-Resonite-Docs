<languages></languages> <translate>

The **Set Slot Active Self** node sets the Active property of the input
`Instance` slot to the value of the `Active` input when an impulse is
received at `Set`.

## Usage

The `OnDone` output fires an impulse after an impulse is received at
`Set` unless there is no valid `Instance` input. This occurs regardless
of whether the Active property of the `Instance` slot was changed.

By default this node makes no change to the Active property of the
`Instance` if the `Active` input value is unspecified. Note that setting
the active property of a slot to True will not result in the slot
actually becoming active if one of its parents is set as inactive.

## Examples

## Node Menu

</translate>

[Set Slot Active Self](Category:Protoflux{{#translation:}} "wikilink")
[Set Slot Active
Self](Category:Protoflux:Slots{{#translation:}} "wikilink")