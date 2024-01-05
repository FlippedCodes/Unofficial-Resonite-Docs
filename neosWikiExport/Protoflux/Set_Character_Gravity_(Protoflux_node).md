<languages></languages> <translate>

The **Set Character Gravity** node overwrites the `Gravity` field value
on the input `Character` [CharacterController
(Component)](CharacterController_(Component) "wikilink") with the input
`Gravity` vector.

## Usage

The `Gravity` input defaults to \[0;0;0\] which corresponds to no
gravity.

The `OnDone` output fires an impulse when the `Gravity` field value of
the input `Character` has been set as a result of an impulse received at
`Apply`. No impulse will be fired if there is no valid `Character`
input.

Note that for the input `CharacterController` to be affected, the
impulse received at `Apply` must be owned by the `SimulatingUser` set in
the referenced CharacterController component.

## Examples

## Node Menu

</translate>

[Set Character Gravity](Category:Protoflux{{#translation:}} "wikilink")
[Set Character
Gravity](Category:Protoflux:Physics{{#translation:}} "wikilink")