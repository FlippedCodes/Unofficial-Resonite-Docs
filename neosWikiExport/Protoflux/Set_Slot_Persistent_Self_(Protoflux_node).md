<languages></languages> <translate>

The **Set Slot Persistent Self** node sets the Persistent property of
the input `Instance` slot to the value of the `Active` input when an
impulse is received at `Set`.

## Usage

The `OnDone` output fires an impulse after the `Instance` input's
Persistent property has been set. This occurs regardless of whether the
Persistent property of the `Instance` slot was actually changed. No
impulse is fired if there is no valid `Instance` input.

By default this node makes no change to the Persistent property of the
`Instance` if the `Active` input value is unspecified. Note that setting
the Persistent property of a slot to True will not result in the slot
actually becoming persistent if one of its parents is set as
non-persistent.

## Examples

## Node Menu

</translate>

[Set Slot Persistent
Self](Category:Protoflux{{#translation:}} "wikilink") [Set Slot
Persistent Self](Category:Protoflux:Slots{{#translation:}} "wikilink")