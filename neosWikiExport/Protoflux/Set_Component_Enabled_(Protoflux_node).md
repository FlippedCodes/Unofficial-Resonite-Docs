<languages></languages> <translate>

The **Set Component Enabled** node node sets the Enabled property of the
input `Component` to the `State` input value when an impulse is received
at `Set`.

## Usage

The `State` input determines what value the target `Component`'s Enabled
property is set to. If this is not specified, this node will not change
the Enabled value if an impulse is received at `Set`.

The `OnDone` output fires an impulse when the Enabled property of the
input `Component` has been set as a result of an impulse recieved at
`Set`. An impulse is fired as long as a valid `Component` input is
provided regardless of whether the Enabled property value was actually
changed.

## Examples

## Node Menu

</translate>

[Set Component Enabled](Category:Protoflux{{#translation:}} "wikilink")
[Set Component
Enabled](Category:Protoflux:Components{{#translation:}} "wikilink")