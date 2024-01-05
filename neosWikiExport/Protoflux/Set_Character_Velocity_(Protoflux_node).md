<languages></languages> <translate>

The **Set Character Velocity** node overwrites the linear velocity of
the input `Character` [CharacterController
(Component)](CharacterController_(Component) "wikilink") with the input
`Velocity` when an impulse is received at `Apply`.

## Usage

The `Velocity` default is \[0;0;0\].

The `OnDone` output fires an impulse when the linear velocity of the
input `Character` has been set as a result of an impulse received at
`Apply`. No impulse will be fired if there is no valid `Character`
input.

Note that for the input `CharacterController` to be affected, the
impulse received at `Apply` must be owned by the `SimulatingUser` set in
the referenced CharacterController component. For an explanation, see
[Frooxius' comment on
GitHub](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3197#issuecomment-944923044)

## Examples

## Node Menu

</translate>

[Set Character Velocity](Category:Protoflux{{#translation:}} "wikilink")
[Set Character
Velocity](Category:Protoflux:Physics{{#translation:}} "wikilink")