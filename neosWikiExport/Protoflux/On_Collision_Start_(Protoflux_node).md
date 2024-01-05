<languages></languages> <translate>

The **On Collision Start** node fires an impulse from `OnEvent` when the
`Other` collider starts colliding with the input `Collider`.

## Usage

The `Other` output provides the collider which started colliding with
the input `Collider`. This value is available for the duration of the
impulse chain started from `OnEvent`.

Note that, in general, collisions where neither collider is a
[CharacterController
(Component)](CharacterController_(Component) "wikilink") will generate
an impulse from `OnEvent` for *each* user in a session. This usually
requires filtering the impulses such that only the ones for relevant
users propagate to downstream nodes. For collisions where the `Other`
collider is a CharacterController an impulse will only be fired for the
CharacterCollider's SimulatingUser.

## Examples

Tutorial from ProbablePrime on the collider event nodes:
<youtube><https://www.youtube.com/watch?v=ewM-KzMD9LA></youtube>

## Node Menu

</translate>

[On Collision Start](Category:Protoflux{{#translation:}} "wikilink") [On
Collision Start](Category:Protoflux:Physics{{#translation:}} "wikilink")