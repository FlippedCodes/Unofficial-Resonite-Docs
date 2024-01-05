<languages></languages> <translate>

## Intoduction

The **RandomObjectSpawner** component selects a slot from the
`Templates` list, and spawns it either at this component's parent (in
the case of `Spawn()`), or at the point specified in an argument (in the
case of `SpawnAtPoint()`)

## Usage

## Behavior

When triggered by any event source that accepts an Action (for
`Spawn()`), or Action<float3> (for `SpawnAtPoint()`, this component will
spawn a random slot from `Templates`

The `Spawn()` trigger can be invoked by a component such as [Button
Action Trigger](ButtonActionTrigger_(Component) "wikilink"), when bound
to a [UIX Button](Button_(Component) "wikilink") or [Resonite
Button](ResoniteButton_(Component) "wikilink")

The `SpawnAtPoint()` trigger can be invoked by a component such as
[Character Event Trigger](CharacterEventTrigger_(Component) "wikilink"),
which provides the required
**[Float3](:Category:Types:Float3 "wikilink")** argument.

Prior to [Build
2020.11.8.605](https://discordapp.com/channels/402159838827905024/469131434628612116/774938408870346772),
this component would duplicate a random slot from `Templates` in-place,
without changing its location.

## Examples

## Related Components

</translate>

[RandomObjectSpawner
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[RandomObjectSpawner
(Component){{#translation:}}](Category:Components:Transform{{#translation:}} "wikilink")
[Category:Triggers](Category:Triggers "wikilink")