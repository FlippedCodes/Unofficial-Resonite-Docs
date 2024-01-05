<languages></languages> <translate>

The **Apply Character Force** node changes the linear velocity of the
input `Character` [CharacterController
(Component)](CharacterController_(Component) "wikilink") proportional to
the input `Force` when an impulse is received at `Apply`.

## Usage

The `IgnoreMass` input determines whether the Mass field on any
associated collider (must be on the same Slot as the `Character` and
must have Type `CharacterController`) is taken into account when
calculating the resulting velocity. If False, the MassScaling Enum value
on the `Character` will also be taken into account and the effective
mass value scaled by the `Character` Slot's global scale. Default is
False.

The `OnDone` output fires an impulse when the velocity of the input
`CharacterController` has been changed as a result of an impulse
received at `Apply`. No impulse will be fired if there is no valid
`CharacterController` input.

If `IgnoreMass` is False, the change in velocity of the
`CharacterController` is the input `Force` multiplied by the local
user's frame update time divided by the CharacterCollider's effective
mass. If `IgnoreMass` is True, the change in velocity of the
`CharacterController` is the input `Force` multiplied by the local
user's frame update time.

Note that for the input `CharacterController` to be affected, the
impulse received at `Apply` must be owned by the `SimulatingUser` set in
the referenced CharacterController component. For an explanation, see
[Frooxius' comment on
GitHub](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3197#issuecomment-944923044)

## Examples

## Node Menu

</translate>

[Apply Character Force](Category:Protoflux{{#translation:}} "wikilink")
[Apply Character
Force](Category:Protoflux:Physics{{#translation:}} "wikilink")