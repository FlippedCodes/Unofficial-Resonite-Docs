<languages></languages> <translate>

The **Slot Children Events** node generates impulses when child slots
are added or removed from the `Instance` slot.

Note that currently Slot Children Events does not support the value of
the `Instance` slot changing.
[1](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2822#issuecomment-902045353)

## Usage

The `OnUser` input can be used to specify which user will own the
generated impulses. By default impulses are owned by the user who caused
the change. Providing the [Local
User](Local_User_(Protoflux_node) "wikilink") to this input will result
in impulses being fired for all users in the session.

The `OnChildAdded` output fires impulses whenever a child slot is added
under the `Instance` slot.

The `OnChildRemoved` output fires impulses whenever a child slot is
removed from under the `Instance` slot.

The `Child` output provides the slot which was added / removed from
under the `Instance` slot. This value is only available for the duration
of the impulse chain started by `OnChildAdded` or `OnChildRemoved`. Note
that the value will be *null* if a child slot is destroyed, rather than
being reparented away from the `Instance` slot.

## Examples

Tutorial by ProbablePrime:
<youtube><https://www.youtube.com/watch?v=2ArCXOM4Lzo></youtube>

## Related Issues

[<s>#666 - Bugs with Slot Children Events
node</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/666)

[<s>#930 - Add OnChildDestroyed to Slot Children Events
node</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/930)

[<s>#1014 - Slot Children Events causing null parents on
deletion</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/1014)

[<s>#1335 - Slot Child Events Bug: event is too
fast?</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/1335)

[#2822 - Slot Children Events node breaks on input
change](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2822)

## Node Menu

</translate>

[Slot Children Events](Category:Protoflux{{#translation:}} "wikilink")
[Slot Children
Events](Category:Protoflux:Slots{{#translation:}} "wikilink")